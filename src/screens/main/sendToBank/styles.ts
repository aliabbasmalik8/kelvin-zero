import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {backgroundColor: '#242458', height: '100%'},
  topContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
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
  iconText: {
    color: 'white',
    fontSize: 12,
    marginTop: 8,
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
  },
  sendContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '65%',
  },
  amountInput: {
    paddingTop: 20,
    margin: 10,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  amountInputStyle: {
    fontSize: 24,
    fontWeight: '500',
  },
  bottomSheetContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 470,
  },
  bottomSheetTextCont: {
    width: '80%',
  },
  bottomSheetmainText: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 8,
    lineHeight: 43,
    textAlign: 'center',
    color: '#1F1F1F',
  },
  bottomSheetSubText: {
    fontSize: 12,
    color: '#A5A5A5',
    lineHeight: 16,
    textAlign: 'center',
  },
  image: {
    width: 264,
    height: 256,
  },
  backToHomeButton: {
    width: '100%',
    marginTop: 70,
  },
  addButtonContainer: {
    position: 'absolute',
    right: 20,
    bottom: 50,
  },
  addButton: {
    width: 73,
    height: 73,
  },
  sendButton: {
    marginTop: 100,
  },
});
