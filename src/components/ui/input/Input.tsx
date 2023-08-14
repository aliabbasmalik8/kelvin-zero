import React, {FC} from 'react';
import {Input as RNEInput} from '@rneui/themed';
import {styles} from './styles';
import {IInputProps} from './InputType';

const Input: FC<IInputProps> = ({placeholder}) => {
  return (
    <RNEInput
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.input}
      placeholder={placeholder}
    />
  );
};

export default Input;
