import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  topContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  amountContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 8,
    alignItems: 'baseline',
  },
  walletText: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    lineHeight: 16,
  },
  walletAmount: {
    color: 'white',
    fontSize: 48,
    fontFamily: 'Poppins-Medium',
  },
  walletAmountDecimal: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
  },
  editButton: {
    display: 'flex',
    padding: 14,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#414185',
    borderRadius: 12,
    marginTop: 20,
  },
  editButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
  },
  iconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 18,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 24,
  },
});
