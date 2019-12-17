import {combineReducers} from 'redux';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
export default combineReducers({
  SignInReducer: SignIn,
  SignUpReducer: SignUp,
});
