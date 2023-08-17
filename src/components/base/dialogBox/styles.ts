import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  dialogStyle: {
    paddingHorizontal: 16,
    paddingTop: 24,
    borderRadius: 140,
    width: 270,
  },
  dialogOverlayStyle: {
    borderRadius: 14,
  },
  dialogTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F1F1F',
    textAlign: 'center',
  },
  dialogBody: {
    marginTop: 6,
    fontSize: 12,
    textAlign: 'center',
    width: '71%',
    display: 'flex',
    alignSelf: 'center',
    color: '#A5A5A5',
    lineHeight: 22,
  },
  highlightedText: {
    color: '#242458',
    fontWeight: '500',
  },
  dialogActionContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  dialogButton: {
    height: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  redButton: {
    color: '#F54E4E',
    fontSize: 14,
    paddingTop: 12,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
  blueButton: {
    color: '#2A61EE',
    paddingTop: 12,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Poppins-Regular',
  },
});
