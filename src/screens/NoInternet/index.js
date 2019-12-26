import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import NoInternetIcon from '../../assets/img/no-internet.png';

const NoInternet = () => {
  return (
    <View style={styles.wrapper}>
      <Image source={NoInternetIcon} style={styles.image} />
    </View>
  );
};

export default NoInternet;
