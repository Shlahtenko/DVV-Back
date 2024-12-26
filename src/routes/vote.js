import express from 'express';

import { updateVotes } from '#controllers/vote.js';

const router = express.Router();

router.patch('/:id', updateVotes);

export default router;
