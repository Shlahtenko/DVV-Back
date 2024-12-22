import express from 'express';

import { getVotesByUserId, updateVotes } from '#controllers/vote.js';

const router = express.Router();

router.get('/:id', getVotesByUserId);
router.patch('/:id', updateVotes);

export default router;
