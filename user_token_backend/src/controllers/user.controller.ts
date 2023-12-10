import { Request, Response } from 'express';

import handleError from '../utils/handleError';
import User from '../models/user.model';
import { generateToken } from '../utils/generateToken';
import errorResponse from '../utils/errorResponse';

export default class UserController {
  static createUser = async (req: Request, res: Response) => {
    const { name, phone, company, designation } = req.body;

    try {
      const generatedToken = await generateToken();

      if (!generatedToken) {
        return errorResponse(res, 500, 'Something went wrong');
      }

      const participant = await User.create({
        name,
        phone,
        company,
        designation,
        token: generatedToken,
      });
      res.json({ token: participant.token });
    } catch (error) {
      handleError(res, error);
    }
  };
}
