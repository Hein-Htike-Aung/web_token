import { Response } from 'express';

const errorResponse = (
  res: Response,
  statusCode = 500,
  message: string,
  errors = {},
) => {
  res.status(statusCode).json({
    status: false,
    statusCode,
    message,
    errors,
  });
};

export default errorResponse;
