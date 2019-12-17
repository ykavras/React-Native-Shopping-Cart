import AsyncStorage from '@react-native-community/async-storage';
import NavigationService from './NavigationService';
import store from '../store/index';

const saveToken = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    await setupAuth();
  } catch (e) {
    console.log(e);
  }
};

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    const user = await AsyncStorage.getItem('user');
    if (!token && !user) {
      NavigationService.navigate('Auth');
      return false;
    }
    store.getState().SignInReducer.token = token;
    store.getState().SignInReducer.user = user;
    NavigationService.navigate('App');
  } catch (e) {
    console.log(e);
  }
};

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');
    store.getState().SignInReducer.token = null;
    store.getState().SignInReducer.user = null;
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
