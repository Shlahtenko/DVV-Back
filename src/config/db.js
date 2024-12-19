import mongoose from 'mongoose';

import { MONGO_URI } from './env.js';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {});
    console.log('\x1b[32m%s\x1b[0m', 'MongoDB connected');
  } catch (err) {
    console.error(err);
  }
};

export default connectDB;
