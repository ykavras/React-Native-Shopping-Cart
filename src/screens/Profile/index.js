import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import goCounter from '../../store/Actions/Auth/SignIn';

class Profile extends Component {
  componentDidMount() {
    console.log('Profile');
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text>Profile</Text>
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
)(Profile);
