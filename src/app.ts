/* eslint-disable @typescript-eslint/ban-ts-comment */
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/students/student.route';
import { userRoutes } from './app/modules/user/user.route';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

const app: Application = express();

// Parser
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/users', userRoutes);

app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});

// using global error handler
// @ts-ignore
app.use(globalErrorHandler);

export default app;
