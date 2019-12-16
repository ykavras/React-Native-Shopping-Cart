import {createStore, applyMiddleware} from 'redux';
import Reducers from './Reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reduxPromise from 'redux-promise-middleware';

const middleWares = [thunk, createLogger, reduxPromise];
const store = createStore(Reducers, applyMiddleware(...middleWares));
export default store;
