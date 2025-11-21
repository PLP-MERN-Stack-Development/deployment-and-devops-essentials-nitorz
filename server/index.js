import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import winston from 'winston';

dotenv.config();

const app = express();

// Basic logging using morgan and winston
app.use(morgan('combined'));

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  transports: [ new winston.transports.Console() ]
});

// Security
app.use(helmet());
app.use(cors());
app.use(express.json());

// Simple health check
app.get('/health', (req, res) => res.json({ status: 'ok', env: process.env.NODE_ENV || 'development' }));

// Example route
app.get('/api/hello', (req, res) => res.json({ message: 'Hello from production-ready server' }));

// Global error handler
app.use((err, req, res, next) => {
  logger.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;
const start = async () => {
  try {
    if (!process.env.MONGO_URI) {
      logger.warn('MONGO_URI not set. Skipping DB connection (use a real uri in production).');
    } else {
      await mongoose.connect(process.env.MONGO_URI, { dbName: 'app' });
      logger.info('Connected to MongoDB');
    }
    app.listen(PORT, () => logger.info(`Server started on port ${PORT}`));
  } catch (err) {
    logger.error('Failed to start', err);
    process.exit(1);
  }
};

start();
