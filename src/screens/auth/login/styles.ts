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
    marginHorizontal: 20,
  },
  mainText: {
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subText: {
    fontSize: 12,
    fontWeight: '200',

    marginBottom: 24,
    textAlign: 'center',
  },
  loginContainer: {
    marginTop: 30,
  },
  dividerContainer: {
    marginTop: 90,
  },
  altLoginCont: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 60,
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
    marginTop: 70,
    textAlign: 'center',
  },
  bottomMainText: {
    fontSize: 14,
    fontWeight: '200',
    textAlign: 'center',
  },
  signUpTextCont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signUpText: {
    color: '#1F1F1F',
    fontWeight: 'bold',
  },
  highlightedText: {
    color: '#1F1F1F',
    fontWeight: 'bold',
  },
  signupButton: {
    color: '#2A61EE',
    marginLeft: 5,
  },
});
