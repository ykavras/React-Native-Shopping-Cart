import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import styles from './styles';

export const ProductCart = props => {
  const {item, plusPress, minusPress, removeFromCart, cartData} = props;
  let qty = item.qty;
  if (cartData) {
    const index = cartData.findIndex(p => p.id === item.id);
    if (index > -1) {
      qty = cartData[index].qty;
    }
  }
  return (
    <View style={styles.wrapper}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.quantity}>
          <TouchableOpacity
            style={[styles.button, styles.minus]}
            onPress={() => minusPress({...item})}>
            <Icon style={styles.icon} name="minus" type="FontAwesome" />
          </TouchableOpacity>
          <Text style={styles.qty}>{qty}</Text>
          <TouchableOpacity
            style={[styles.button, styles.plus]}
            onPress={() => plusPress({...item})}>
            <Icon style={styles.icon} name="plus" type="FontAwesome" />
          </TouchableOpacity>
        </View>
        {qty > 0 && (
          <TouchableOpacity
            style={styles.remove}
            onPress={() => removeFromCart({...item})}>
            <Icon style={styles.icon} name="times" type="FontAwesome" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
