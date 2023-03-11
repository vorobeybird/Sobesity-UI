import * as dotenv from 'dotenv'
dotenv.config()

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
    res.status(200).sendFile(path.join(__dirname, '../../client/build/index.html'));
});

app.use(errorHandler);

const start = async () => {
    try {
        console.log(`${process.env.DB_URL}:${process.env.DB_PORT}/auth`)
        await mongoose.connect(`${process.env.DB_URL}:${process.env.DB_PORT}/auth`);
        console.log('Connected to mongodb, port 27017')
    } catch (err) {
        console.error(err);
    }
}

const PORT = process.env.PORT || 5150;

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});



start();