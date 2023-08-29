import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  sendContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    height: Dimensions.get('window').height - 120,
    marginBottom: 100,
  },
  amountInput: {
    paddingTop: '3%',
    margin: 10,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  amountInputStyle: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
  },

  sendButton: {
    paddingBottom: 300,
  },
});
