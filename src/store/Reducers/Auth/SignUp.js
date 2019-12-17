import {
  SIGN_UP_PENDING,
  SIGN_UP_FULFILLED,
  SIGN_UP_REJECTED,
} from '../../Actions/Auth/types';
const INITIAL_STATE = {
  loading: false,
  data: null,
  error: null,
};

function SignIn(state = INITIAL_STATE, action) {
  const {type, payload} = action;
  switch (type) {
    case SIGN_UP_PENDING:
      return {...state, loading: true, data: null, error: null};
    case SIGN_UP_FULFILLED:
      return {...state, loading: false, data: payload, error: null};
    case SIGN_UP_REJECTED:
      return {...state, loading: false, error: payload, data: null};
    default:
      return state;
  }
}
export default SignIn;
