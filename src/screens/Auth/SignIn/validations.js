import * as Yup from 'yup';

const validations = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
});

module.exports = validations;
