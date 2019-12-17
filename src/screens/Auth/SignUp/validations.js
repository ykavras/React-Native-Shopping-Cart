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
    .label('Password')
    .required()
    .min(4, 'Password must have more than 4 characters '),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Confirm Password must matched Password')
    .required('Confirm Password is required'),
});

module.exports = validations;
