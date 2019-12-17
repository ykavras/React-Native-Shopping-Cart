import {StyleSheet} from 'react-native';
import theme from './theme';

const styles = StyleSheet.create({
  error: {
    fontFamily: theme.fontRegular,
    fontSize: 12,
    color: theme.colorRed,
    paddingVertical: 4,
  },
});

export default styles;
