import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
    fontFamily: 'Poppins-Medium',
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
    fontFamily: 'Poppins-Regular',
  },
  image: {
    width: 264,
    height: 256,
  },
  backToHomeButton: {
    width: '100%',
    marginTop: 70,
  },
});
