import {StyleSheet, Dimensions} from 'react-native';
export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#242458',
    paddingTop: Dimensions.get('screen').height > 750 ? 85 : 65,
    paddingBottom: 30,
    paddingHorizontal: 18,
  },
  inlineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    position: 'absolute',
    alignItems: 'center',
  },
  mainText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    lineHeight: 25,
  },
  backButton: {
    position: 'absolute',
    width: 40,
    height: 40,
  },
});
