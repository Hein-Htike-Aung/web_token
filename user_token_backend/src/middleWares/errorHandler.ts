import { Request, Response } from 'express';
import { ReqHandler, ResponseError } from '../../types';

const errorHandler: ReqHandler = (
  err: ResponseError,
  req: Request,
  res: Response,
) => {
  return res.status(err.statusCode).json({
    status: false,
    statusCode: err.statusCode,
    message: err?.message,
    stack: err?.stack,
    errors: err,
  });
};

export default errorHandler;
