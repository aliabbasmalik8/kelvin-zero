import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {backgroundColor: '#242458', height: '100%', flex: 1},
  topContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
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
    fontFamily: 'Poppins-Medium',
  },
});
