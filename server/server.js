import dotenv from 'dotenv';
import http from 'http';
import jwt from 'jsonwebtoken';
import { Server } from 'socket.io';

import app from './src/app.js';
import { connectDB } from './src/config/db.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

/* ======================
   CONEXIÓN A DB
====================== */
connectDB();

/* ======================
   HTTP SERVER
====================== */
const server = http.createServer(app);

/* ======================
   SOCKET.IO SERVER
====================== */
const io = new Server(server, {
  cors: {
    origin: '*', // ⚠️ restringir en prod
    methods: ['GET', 'POST']
  }
});

/* ======================
   SOCKET AUTH MIDDLEWARE
====================== */
io.use((socket, next) => {
  try {
    const token = socket.handshake.auth?.token;

    if (!token) {
      return next(new Error('No token provided'));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    socket.userId = decoded.id;
    socket.role = decoded.role;

    next();
  } catch (error) {
    next(new Error('Invalid or expired token'));
  }
});

/* ======================
   SOCKET CONNECTION
====================== */
io.on('connection', (socket) => {
  console.log(`🟢 Socket connected: ${socket.userId}`);

  // Notificación inicial
  socket.emit('notification', {
    type: 'info',
    message: 'Connected to FenixHealth real-time service'
  });

  socket.on('disconnect', () => {
    console.log(`🔴 Socket disconnected: ${socket.userId}`);
  });
});

/* ======================
   EXPONER IO A EXPRESS
====================== */
app.set('io', io);

/* ======================
   START SERVER
====================== */
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
