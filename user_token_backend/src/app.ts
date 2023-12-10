import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import errorHandler from './middleWares/errorHandler';
import notFound from './middleWares/notFound';
import 'reflect-metadata';
import { model_list } from './utils/model_list';

import UserRouter from '../src/routes/user.route';

const app = express();
app.use(
  cors({
    origin: ['http://localhost:3000', 'http://localhost:5173'],
  }),
);
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

model_list;

app.use('/api', UserRouter);

app.use(notFound);
app.use(errorHandler);

export default app;
