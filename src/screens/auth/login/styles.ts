import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 110,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  textContainer: {
    marginHorizontal: 9,
  },
  mainText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    lineHeight: 43,
  },
  subText: {
    fontSize: 12,
    marginBottom: 12,
    color: '#A5A5A5',
    lineHeight: 16,
  },
  loginContainer: {
    marginTop: 30,
  },
  loginButton: {
    marginHorizontal: 10,
  },
  checkBoxCont: {
    marginTop: 16,
  },
  dividerContainer: {
    marginTop: 118,
  },
  altLoginCont: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 43,
    width: '100%',
  },
  altLogin: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 'auto',
    width: '65%',
  },
  bottomContainer: {
    marginTop: 45,
    textAlign: 'center',
  },
  bottomMainText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#A5A5A5',
    fontWeight: '500',
  },
  signUpTextCont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  signUpText: {
    color: '#1F1F1F',
    fontSize: 12,
    fontWeight: '500',
  },
  highlightedText: {
    color: '#1F1F1F',
    fontSize: 12,
    fontWeight: '500',
  },
  signupButton: {
    color: '#2A61EE',
    marginLeft: 5,
  },
  bottomSheetContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 500,
  },
  bottomSheetTextCont: {
    width: '70%',
  },
  bottomSheetmainText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    lineHeight: 43,
    textAlign: 'center',
  },
  bottomSheetSubText: {
    fontSize: 12,
    color: '#A5A5A5',
    lineHeight: 16,
    textAlign: 'center',
  },
  backToHomeButton: {
    width: '100%',
    marginTop: 40,
  },
});
