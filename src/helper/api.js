import axios from 'axios';
import store from '../store/index';
import UtilityFunctions from './UtilityFunctions';
import AuthControl from './AuthControl';

const BASE_URL = 'http://192.168.1.104:3000/';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

axiosInstance.interceptors.request.use(
  config => {
    UtilityFunctions.consoleFunc('REQUEST', '#FFAA00', config);
    const {token} = store.getState().SignInReducer;
    if (token !== null && token !== '') {
      config.headers['x-access-token'] = store.getState().SignInReducer.token;
    }
    return config;
  },
  err => Promise.reject(err),
);

axiosInstance.interceptors.response.use(
  response => {
    UtilityFunctions.consoleFunc('RESPONSE', '#59FF00 ', response);
    return response;
  },
  error => {
    UtilityFunctions.consoleFunc(
      'RESPONSE_ERROR',
      '#E50808',
      error.response ? error.response : error,
    );
    if (error.response.status === 401) {
      AuthControl.removeToken();
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
