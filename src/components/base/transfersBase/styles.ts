import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionText: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: '#1F1F1F',
  },
  scrollView: {
    marginBottom: 300,
    overflow: 'scroll',
  },
});
