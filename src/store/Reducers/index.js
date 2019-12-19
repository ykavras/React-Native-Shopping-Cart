import {combineReducers} from 'redux';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import Movies from './Movie/Movies';
import MovieDetail from './Movie/MovieDetail';
import ShoppingCart from './ShoppingCart';
export default combineReducers({
  SignInReducer: SignIn,
  SignUpReducer: SignUp,
  MoviesReducer: Movies,
  MovieDetailReducer: MovieDetail,
  ShoppingCartReducer: ShoppingCart,
});
