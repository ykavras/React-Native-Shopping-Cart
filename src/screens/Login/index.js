import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import goCounter from '../../store/Actions/Counter';

class Login extends Component {
  componentDidMount() {
    console.log('Login');
  }

  counterChange = val => {
    this.props.goCounter(val);
  };

  render() {
    const {total} = this.props.counter;
    return (
      <View style={styles.wrapper}>
        <Text>Login</Text>
        <Text style={styles.counter}>{total}</Text>
        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => this.counterChange(true)}
            style={[styles.button, styles.buttonUp]}>
            <Text style={styles.buttonTitle}>UP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.counterChange(false)}
            style={[styles.button, styles.buttonDown]}>
            <Text style={styles.buttonTitle}>DOWN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.CounterReducer,
  };
};

const mapStateToDispatch = {
  goCounter,
};

export default connect(
  mapStateToProps,
  mapStateToDispatch,
)(Login);
