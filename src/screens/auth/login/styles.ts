import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    ...Platform.select({
      ios: {
        paddingTop: 110,
      },
      android: {
        paddingTop: 70,
      },
    }),
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  textContainer: {
    marginHorizontal: 9,
  },
  inputContainer: {
    // marginBottom: 6,
  },
  mainText: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 20,
    lineHeight: 43,
    fontStyle: 'normal',
  },
  subText: {
    fontSize: 12,
    marginBottom: 12,
    color: '#A5A5A5',
    lineHeight: 16,
    width: '96%',
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomMainText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#A5A5A5',
    fontWeight: '500',
    lineHeight: 16.5,
    fontFamily: 'Poppins-Regular',
  },
  signUpTextCont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    paddingBottom: 100,
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
    lineHeight: 17,
  },
  signupButton: {
    color: '#2A61EE',
    marginLeft: 5,
    fontWeight: '600',
    fontSize: 12,
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
    marginTop: 50,
  },
});
