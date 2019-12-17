import api from '../../../helper/api';
import {
  MOVIE_DETAIL_PENDING,
  MOVIE_DETAIL_FULFILLED,
  MOVIE_DETAIL_REJECTED,
} from './types';
import {fetchingRequest, fetchingSuccess, fetchingFailure} from '../index';

export const MovieDetail = id => {
  return async dispatch => {
    dispatch(fetchingRequest(MOVIE_DETAIL_PENDING));
    try {
      const response = await api.get('api/movie/' + id);
      const payload = await response.data;
      dispatch(fetchingSuccess(MOVIE_DETAIL_FULFILLED, payload));
    } catch (error) {
      dispatch(fetchingFailure(MOVIE_DETAIL_REJECTED, error.response.data));
    }
  };
};
