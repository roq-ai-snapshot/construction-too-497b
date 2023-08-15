import * as yup from 'yup';

export const companyValidationSchema = yup.object().shape({
  description_update: yup.string().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
