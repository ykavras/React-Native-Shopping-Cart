import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backBtn: {
    backgroundColor: 'rgba(36,46,36,0.8)',
    position: 'absolute',
    paddingHorizontal: 20,
    paddingVertical: 10,
    left: 14,
    top: 20,
    zIndex: 1,
    color: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    fontWeight: '600',
    fontSize: 14,
  },
  nameWrapper: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(36,46,36,0.8)',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default styles;
