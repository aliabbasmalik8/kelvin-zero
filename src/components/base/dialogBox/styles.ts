import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  dialogStyle: {
    paddingTop: 24,
    padding: 0,
  },
  dialogOverlayStyle: {
    borderRadius: 14,
    padding: 0,
  },
  paddingTopContainer: {paddingTop: 24, paddingHorizontal: 13},
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
    marginTop: 14,
  },
  dialogButton: {
    // height: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    borderTopWidth: 1,
    borderColor: '#F3F3F3',
    paddingBottom: 15,
    paddingTop: 6,
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
