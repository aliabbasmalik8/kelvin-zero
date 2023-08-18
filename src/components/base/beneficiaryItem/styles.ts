import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginLeft: {marginLeft: 12},
  mainText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#1F1F1F',
    lineHeight: 22,
  },
  textDark: {
    color: '#1F1F1F',
  },
  textWhite: {
    color: 'white',
  },

  dateText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',

    lineHeight: 16,
  },
  light: {
    color: '#A5A5A5',
  },
  dark: {
    color: '#AAC0F8',
  },
  moneyText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    lineHeight: 22,
  },
  green: {color: '#64C361'},
  red: {color: '#F54E4E'},
});
