import { Request, Response } from 'express';
import { ReqHandler } from '../../types';
import errorResponse from '../utils/errorResponse';

const notFound: ReqHandler = (req: Request, res: Response) =>
  errorResponse(res, 404, `${req.originalUrl} not found`);

export default notFound;
