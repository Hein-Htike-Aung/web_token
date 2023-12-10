import * as yup from 'yup';

export const createUserSchema = yup.object({
  body: yup.object({
    name: yup.string().required(),
    phone: yup.string().required(),
    company: yup.string().required(),
    designation: yup.string().required(),
  }),
});
