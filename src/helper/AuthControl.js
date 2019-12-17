import AsyncStorage from '@react-native-community/async-storage';
import NavigationService from './NavigationService';
import store from '../store/index';

const saveToken = async token => {
  try {
    await AsyncStorage.setItem('token', token);
    await setupAuth();
  } catch (e) {
    console.log(e);
  }
};

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      NavigationService.navigate('Auth');
      return false;
    }
    store.getState().SignInReducer.token = token;
    NavigationService.navigate('App');
  } catch (e) {
    console.log(e);
  }
};

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('token');
    store.getState().SignInReducer.token = null;
    await setupAuth();
  } catch (e) {
    console.log(e);
  }
};

const setupAuth = async () => {
  await getToken();
};

export default {
  saveToken,
  getToken,
  removeToken,
  setupAuth,
};
