import * as Yup from 'yup';

const validations = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required(),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name Required'),
  surname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Surname Required'),
  phone: Yup.number().required('Phone Required'),
  address: Yup.string().required('Address Required'),
  password: Yup.string()
    .required('Password is required')
    .min(4),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password confirm is required'),
});

module.exports = validations;
