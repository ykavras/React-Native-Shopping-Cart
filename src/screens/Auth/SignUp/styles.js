import {StyleSheet} from 'react-native';
import theme from '../../../helper/theme';
const styles = StyleSheet.create({
  errorText: {
    fontSize: 10,
    color: theme.colorRed,
    paddingTop: 2,
  },
  successMessage: {
    fontSize: 14,
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default styles;
