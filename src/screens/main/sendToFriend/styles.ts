import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {backgroundColor: '#242458', height: '100%'},
  topContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  titleText: {
    color: 'white',
    fontSize: 12,
    marginTop: 8,
    fontFamily: 'Poppins-Regular',
  },
  friendsContainer: {
    display: 'flex',
    paddingHorizontal: 23,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});
