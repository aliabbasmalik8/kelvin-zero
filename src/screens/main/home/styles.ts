import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {backgroundColor: '#242458', height: '100%'},
  topContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
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
    fontWeight: '500',
    lineHeight: 16,
  },
  walletAmount: {
    color: 'white',
    fontSize: 48,
    fontWeight: '500',
  },
  walletAmountDecimal: {
    color: 'white',
    fontSize: 24,
    fontWeight: '500',
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
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButton: {
    width: 73,
    height: 73,
  },
  iconText: {
    color: 'white',
    fontSize: 12,
    marginTop: 8,
    fontWeight: '500',
  },
  seeAllButton: {
    color: '#2A61EE',
    fontSize: 14,
    fontWeight: '500',
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F1F1F',
  },
  padding: {
    paddingBottom: 200,
  },
});
