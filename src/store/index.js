import {createStore, applyMiddleware} from 'redux';
import Reducers from './Reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const middleWares = [thunk, createLogger];
const store = createStore(Reducers, applyMiddleware(...middleWares));
export default store;
