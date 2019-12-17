import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

class Main extends Component {
  componentDidMount() {
    console.log('Home');
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text
          style={styles.textBtn}
          onPress={() => this.props.navigation.navigate('MainDetail')}>
          Go to Detail
        </Text>
        <Text>Main</Text>
      </View>
    );
  }
}
export default Main;
