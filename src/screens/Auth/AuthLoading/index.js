import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Spinner} from 'native-base';
import SignIn from '../../../store/Actions/Auth/SignIn';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import NavigationService from '../../../helper/NavigationService';

class AuthLoading extends Component {
  async componentDidMount() {
    await this.setupAuth();
  }

  async saveToken(token) {
    try {
      await AsyncStorage.setItem('token', token);
      await this.setupAuth();
    } catch (e) {
      console.log(e);
    }
  }

  async removeToken() {
    try {
      await AsyncStorage.removeItem('token');
      this.props.SignInReducer = null;
      await this.setupAuth();
    } catch (e) {
      console.log(e);
    }
  }

  async setupAuth() {
    await this.getToken();
  }

  async getToken() {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log(token);
      if (!token) {
        NavigationService.navigate('Auth');
        return false;
      }
      this.props.SignInReducer = token;
      NavigationService.navigate('App');
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Spinner color="red" />
        <Text>Auth Control...</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    SignInReducer: state.SignInReducer,
  };
};

const mapStateToDispatch = {
  SignIn,
};

export default connect(
  mapStateToProps,
  mapStateToDispatch,
)(AuthLoading);
