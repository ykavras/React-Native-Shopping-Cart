import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  wrapper: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  image: {
    width: '100%',
    height: Dimensions.get('window').height / 3,
    resizeMode: 'contain',
  },
});
