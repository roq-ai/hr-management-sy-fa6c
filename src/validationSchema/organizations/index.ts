import * as yup from 'yup';

export const organizationValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  deleted_at: yup.date().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
