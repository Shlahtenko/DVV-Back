import dotenv from 'dotenv';

dotenv.config();

export const MONGO_URI = process.env.MONGO_URI;
export const PORT = process.env.PORT || 3000;
export const JWT_SECRET = process.env.JWT_SECRET;
export const NODE_ENV =
  process.env.NODE_ENV === 'production' ? process.env.NODE_ENV : 'dev';
