import api from '../../../helper/api';
import {SIGN_IN_PENDING, SIGN_IN_FULFILLED, SIGN_IN_REJECTED} from './types';
import {fetchingRequest, fetchingSuccess, fetchingFailure} from '../index';

export const SignIn = (values, bag) => {
  return async dispatch => {
    dispatch(fetchingRequest(SIGN_IN_PENDING));
    try {
      const response = await api.post('authenticate', values);
      const payload = await response.data;
      bag.setSubmitting(false);
      dispatch(fetchingSuccess(SIGN_IN_FULFILLED, payload));
    } catch (error) {
      bag.setSubmitting(false);
      bag.setErrors(error.response.data.message);
      dispatch(fetchingFailure(SIGN_IN_REJECTED, error.response.data));
    }
  };
};
