import express from 'express';
import { json } from 'body-parser';
import 'express-async-errors';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';

import { currentUserRouter } from './routes/current-user';
import { signInRouter } from './routes/signin';
import { signOutRouter } from './routes/signout';
import { signUpRouter } from './routes/signup';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.use(cors());
console.log(path.join(__dirname, '/client'));


app.use(express.json());
app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);

app.get('/api/*', async () => {
    throw new NotFoundError();
})

app.use(express.static(path.join(__dirname, '../../client/build'), {
    extensions: ['js'], maxAge: '31557600'
}))

app.get('*', (req, res) => {
    console.log(path.join(__dirname, '../../client/build/index.html'));
    res.status(200).sendFile(path.join(__dirname, '../../client/build/index.html'));
});

app.use(errorHandler);

const start = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/auth');
        console.log('Connected to mongodb, port 27017')
    } catch (err) {
        console.error(err);
    }
}

app.listen(5150, () => {
    console.log('Listening on port 5150!!!');
});



start();