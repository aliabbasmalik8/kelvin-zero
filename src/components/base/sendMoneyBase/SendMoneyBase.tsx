import {KeyboardAvoidingView, View, Platform} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {Input as RNEInput} from '@rneui/themed';
import {Input} from '@src/components/ui/input';
import {BottomBase} from '../bottomBase';
import {Button} from '@src/components/ui/button';
import {ISendMoneyBaseProps} from './SendMoneyBaseType';

const SendMoneyBase: FC<ISendMoneyBaseProps> = ({
  inputValue,
  handleAmountChange,
  sendMoney,
}) => {
  return (
    <BottomBase>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Use padding for iOS and height for Android
        style={styles.sendContainer}>
        <View>
          <RNEInput
            placeholder="$"
            value={`${inputValue}`}
            onChangeText={handleAmountChange}
            containerStyle={styles.amountInput}
            textAlign="center"
            textContentType="telephoneNumber"
            inputStyle={styles.amountInputStyle}
            keyboardType="numeric"
          />
          <Input
            placeholder="Write your note here"
            textArea={true}
            multiline={true}
          />
        </View>
        <View style={styles.sendButton}>
          <Button title="Send Money" onPress={sendMoney} />
        </View>
      </KeyboardAvoidingView>
    </BottomBase>
  );
};

export default SendMoneyBase;
