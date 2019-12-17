import {
  MOVIES_PENDING,
  MOVIES_FULFILLED,
  MOVIES_REJECTED,
} from '../../Actions/Movie/types';

const INITIAL_STATE = {
  loading: false,
  data: null,
  error: null,
};

export default function Movies(state = INITIAL_STATE, action) {
  const {type, payload} = action;
  switch (type) {
    case MOVIES_PENDING:
      return {...state, loading: true, data: null, error: null};
    case MOVIES_FULFILLED:
      return {...state, loading: false, data: payload, error: null};
    case MOVIES_REJECTED:
      return {...state, loading: true, data: null, error: payload};
    default:
      return state;
  }
}
