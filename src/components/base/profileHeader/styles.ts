import {StyleSheet, Platform} from 'react-native';
export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#242458',
    ...Platform.select({
      ios: {
        paddingTop: 65,
      },
      android: {
        paddingTop: 55,
      },
    }),
    paddingBottom: 20,
    paddingHorizontal: 18,
  },
  inlineContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {width: 40, height: 40},
  textContainer: {
    marginLeft: 12,
  },
  mainText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 25,
  },
  emailText: {
    color: '#AAC0F8',
    marginTop: 2,
    fontSize: 12,
    lineHeight: 16,
  },
  notificationButton: {
    width: 40,
    height: 40,
  },
});
