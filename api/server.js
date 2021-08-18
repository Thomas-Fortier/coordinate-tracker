import dotenv from 'dotenv';
import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import coordinatesRoute from './src/routes/coordinates.route.js';
import mongoose from 'mongoose';

// Setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
dotenv.config({ path: path.join(__dirname, '..', '.env') });

// Constants
const PORT = process.env.PORT || 8000;

// Connect to DB
mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const database = mongoose.connection;
database.on('error', console.error.bind(console, 'Connection error: '));
database.once('open', () => {
  console.log('Connected to database!');
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/coordinates', coordinatesRoute);

// Listen
app.listen(PORT, () => {
  console.log(`API / server is listening on port ${PORT}...`);
});