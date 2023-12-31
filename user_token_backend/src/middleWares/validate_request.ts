import { AnySchema, ValidationError } from 'yup';
import { Request, Response, NextFunction } from 'express';
import errorResponse from '../utils/errorResponse';
import { ReqHandler } from '../../types';

const validateRequest: ReqHandler =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      return next();
    } catch (error) {
      if (error instanceof ValidationError)
        return errorResponse(res, 400, 'Bad Request', error.errors);
      else console.error(error);
    }
  };

export default validateRequest;
