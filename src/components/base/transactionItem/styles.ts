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
    fontWeight: '500',
    color: '#1F1F1F',
    lineHeight: 22,
  },
  dateText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#A5A5A5',
    lineHeight: 16,
  },
  moneyText: {fontSize: 18, fontWeight: '500', lineHeight: 25},
  green: {color: '#64C361'},
  red: {color: '#F54E4E'},
});
