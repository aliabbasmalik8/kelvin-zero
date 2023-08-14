import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 90,
    height: '95%',
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
    paddingHorizontal: 36,
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
    marginTop: 80,
    position: 'absolute',
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 14,
    width: '70%',
  },
  subText: {
    fontSize: 12,
    fontWeight: '200',
    marginBottom: 14,
    width: '90%',
    textAlign: 'center',
  },
});
