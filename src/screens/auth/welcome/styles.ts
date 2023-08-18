import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    ...Platform.select({
      ios: {
        paddingTop: 70,
      },
      android: {
        paddingTop: 35,
      },
    }),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  flexContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 28,
    paddingRight: 39,
  },
  logoStyle: {
    width: 209,
    height: 70,
  },
  moneyStyle: {
    width: 75,
    height: 32,
  },
  backgroundStyle: {
    width: '100%',
    ...Platform.select({
      ios: {
        marginTop: 50,
      },
      android: {
        paddingTop: 35,
      },
    }),

    height: '100%',
    position: 'absolute',
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 36,
    fontWeight: '700',
    // fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    width: '70%',
    lineHeight: 43,
    color: '#1F1F1F',
  },
  subText: {
    fontSize: 12,
    marginBottom: 21,
    width: '90%',
    textAlign: 'center',
    color: '#A5A5A5',
    lineHeight: 16,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    width: '100%',
    marginBottom: 70,
  },
});
