import api from '../../../helper/api';
import {MOVIES_PENDING, MOVIES_FULFILLED, MOVIES_REJECTED} from './types';
import {fetchingRequest, fetchingSuccess, fetchingFailure} from '../index';

export const Movies = () => {
  return async dispatch => {
    dispatch(fetchingRequest(MOVIES_PENDING));
    try {
      const response = await api.get('api/movie');
      const payload = await response.data;
      dispatch(fetchingSuccess(MOVIES_FULFILLED, payload));
    } catch (error) {
      dispatch(fetchingFailure(MOVIES_REJECTED, error.response.data));
    }
  };
};
