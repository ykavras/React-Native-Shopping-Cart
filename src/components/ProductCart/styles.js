import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
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
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 30,
  },
  button: {
    borderRadius: 10,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#FFFFFF',
    fontSize: 14,
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
  remove: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#ff386b',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    borderRadius: 10,
  },
});

export default styles;
