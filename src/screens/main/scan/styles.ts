import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {backgroundColor: '#242458', height: '100%', paddinTop: 30},

  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    top: '40%',
    alignItems: 'center',
  },
  scanText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
  buttonStyle: {
    marginTop: 20,
    width: '100%',
  },
});
