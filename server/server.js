import dotenv from 'dotenv';
import app from './src/app.js';
import { connectDB } from './src/config/db.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

// Conectar DB
connectDB();

// Levantar servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
