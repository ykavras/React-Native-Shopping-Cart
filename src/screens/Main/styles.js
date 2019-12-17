import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontSize: 30,
    marginVertical: 30,
  },
  buttons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  button: {
    borderRadius: 5,
  },
  buttonUp: {
    backgroundColor: '#2233e2',
  },
  buttonDown: {
    backgroundColor: '#e2545e',
  },
  buttonTitle: {
    padding: 20,
    fontSize: 20,
    color: '#FFFFFF',
  },
  textBtn: {
    marginBottom: 20,
    fontWeight: '600',
  },
});

export default styles;
