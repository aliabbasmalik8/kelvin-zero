import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  textStyle: {
    ...Platform.select({
      ios: {
        fontFamily: 'Poppins-Regular',
      },
      android: {
        fontFamily: 'Poppins-Regular',
      },
    }),
  },
});
