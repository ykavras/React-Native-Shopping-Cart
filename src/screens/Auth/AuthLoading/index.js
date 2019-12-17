import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {Spinner} from 'native-base';
import AuthControl from '../../../helper/AuthControl';

class AuthLoading extends Component {
  async componentDidMount() {
    await AuthControl.setupAuth();
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

export default AuthLoading;
