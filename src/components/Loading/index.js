import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';

const Loader = props => {
  const {} = props;
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator />
    </View>
  );
};

export default Loader;
