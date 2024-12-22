import cors from 'cors';
import express from 'express';

import connectDB from '#config/db.js';
import { PORT } from '#config/env.js';
import authRoutes from '#routes/auth.js';
import userRoutes from '#routes/users.js';
import voteRoutes from '#routes/vote.js';

connectDB();
const app = express();

app.use(
  cors({
    // origin: 'http://localhost:5173',
  }),
);

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/vote', voteRoutes);

app.listen(PORT, () => {
  console.log('\x1b[36m%s\x1b[0m', `Server is running on port ${PORT}`);
});

export default app;
