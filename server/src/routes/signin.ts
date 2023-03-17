import express from 'express';

const router = express.Router();

router.post('/api/users/signin', (req, res) => {
    res.send({greet:'hi there'});
});

export { router as signInRouter };