import api from '../../../helper/api';

export function SignUp() {
  return dispatch => {
    dispatch({
      type: 'SIGN_UP',
      payload: api.post('register').then(result => result.data),
    });
  };
}
