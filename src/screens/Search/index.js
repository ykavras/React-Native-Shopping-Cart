import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {connect} from 'react-redux';
import goCounter from '../../store/Actions/Auth/SignIn';

class Search extends Component {
  componentDidMount() {
    console.log('Search');
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text>Search</Text>
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
)(Search);
