import React, {FC} from 'react';
import {View} from 'react-native';
import {Dialog} from '@rneui/themed';
import {Text} from '@src/components/ui/text';
import {IDialogBoxProps} from './DialogBoxType';
import {styles} from './styles';
import {TouchableOpacity} from 'react-native';
const DialogBox: FC<IDialogBoxProps> = ({
  isVisible,
  toggleDialog,
  amount,
  beneficiary,
  onPressOk,
  onPressCancel,
}) => {
  return (
    <Dialog
      isVisible={isVisible}
      onBackdropPress={toggleDialog}
      overlayStyle={styles.dialogOverlayStyle}
      style={styles.dialogStyle}>
      <View>
        <Dialog.Title title="Send Money" titleStyle={styles.dialogTitle} />
        <Text style={styles.dialogBody}>
          Are you sure you want to send{' '}
          <Text style={styles.highlightedText}>
            $ {amount} to {beneficiary}
          </Text>
        </Text>
        <Dialog.Actions>
          <View style={styles.dialogActionContainer}>
            <TouchableOpacity
              style={styles.dialogButton}
              onPress={onPressCancel}>
              <Text style={styles.redButton}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dialogButton} onPress={onPressOk}>
              <Text style={styles.blueButton}>Send</Text>
            </TouchableOpacity>
          </View>
        </Dialog.Actions>
      </View>
    </Dialog>
  );
};

export default DialogBox;
