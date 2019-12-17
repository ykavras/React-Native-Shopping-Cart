import {
  MOVIE_DETAIL_PENDING,
  MOVIE_DETAIL_FULFILLED,
  MOVIE_DETAIL_REJECTED,
} from '../../Actions/Movie/types';

const INITIAL_STATE = {
  loading: false,
  data: null,
  error: null,
};

export default function MovieDetail(state = INITIAL_STATE, action) {
  const {type, payload} = action;
  switch (type) {
    case MOVIE_DETAIL_PENDING:
      return {...state, loading: true, data: null, error: null};
    case MOVIE_DETAIL_FULFILLED:
      return {...state, loading: false, data: payload, error: null};
    case MOVIE_DETAIL_REJECTED:
      return {...state, loading: true, data: null, error: payload};
    default:
      return state;
  }
}
