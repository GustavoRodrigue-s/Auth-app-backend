import express, { json } from 'express';
import cors from 'cors';
import 'express-async-errors';

import dotenv from 'dotenv';

import { errorMiddleware } from '@app/middlewares';

import { routes } from './routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(json());

app.use(routes);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => console.log('Server started 🗿🍷'));
