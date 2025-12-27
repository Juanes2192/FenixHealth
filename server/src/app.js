import express from 'express';
import cors from 'cors';

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());

// Ruta base (health check)
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'FenixHealth API running'
  });
});

import User from './models/User.model.js';

app.get('/api/test-user', async (req, res) => {
  const users = await User.find();
  res.json(users);
});


export default app;
