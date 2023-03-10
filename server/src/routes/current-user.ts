import express from 'express';

const router = express.Router();

import { User } from '../models/user';

router.get('/api/users', async (req, res) => {
    const users = await User.find()

    res.send(users);
});

export { router as currentUserRouter };
