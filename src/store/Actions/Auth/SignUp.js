import api from '../../../helper/api';
import {SIGN_UP_PENDING, SIGN_UP_FULFILLED, SIGN_UP_REJECTED} from './types';
import {fetchingRequest, fetchingSuccess, fetchingFailure} from '../index';

export const SignUp = (values, bag) => {
  return async dispatch => {
    dispatch(fetchingRequest(SIGN_UP_PENDING));
    try {
      const response = await api.post('register', values);
      const payload = await response.data;
      bag.setSubmitting(false);
      dispatch(fetchingSuccess(SIGN_UP_FULFILLED, payload));
    } catch (error) {
      bag.setSubmitting(false);
      bag.setErrors(error.response.data.errors);
      dispatch(fetchingFailure(SIGN_UP_REJECTED, error.response.data));
    }
  };
};
