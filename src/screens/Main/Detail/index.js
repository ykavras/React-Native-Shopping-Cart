import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

class MainDetail extends Component {
  componentDidMount() {
    console.log('HomeDetail');
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text>MainDetail</Text>
      </View>
    );
  }
}

export default MainDetail;
