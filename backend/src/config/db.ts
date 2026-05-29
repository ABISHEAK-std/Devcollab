import mongoose from 'mongoose';
import { env } from './env.js';
import { setDatabaseMode } from '../services/memoryDb.js';

export async function connectDatabase() {
  mongoose.set('strictQuery', true);

  try {
    await mongoose.connect(env.mongoUri);
    console.log('MongoDB connected');
    setDatabaseMode('mongo');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    if (env.nodeEnv === 'production') {
      throw error;
    }
    console.log('Falling back to in-memory datastore (development only)');
    setDatabaseMode('memory');
  }
}