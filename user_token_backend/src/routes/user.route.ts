import express from 'express';
import UserController from '../controllers/user.controller';
import validateRequest from '../middleWares/validate_request';
import { createUserSchema } from '../schema/user.schema';

const router = express.Router();

router.post(
  '/v1/users',
  [validateRequest(createUserSchema)],
  UserController.createUser,
);

export default router;
