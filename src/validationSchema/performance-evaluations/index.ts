import * as yup from 'yup';

export const performanceEvaluationValidationSchema = yup.object().shape({
  evaluation_date: yup.date().required(),
  score: yup.number().integer().required(),
  comments: yup.string().required(),
  user_id: yup.string().nullable(),
});
