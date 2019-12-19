import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#222',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  plus: {
    backgroundColor: '#105aff',
  },
  qty: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
  minus: {
    backgroundColor: '#ff386b',
  },
});

export default styles;
