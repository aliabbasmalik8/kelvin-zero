import React, {FC} from 'react';
import {Input as RNEInput} from '@rneui/themed';
import {styles} from './styles';
import {IInputProps} from './InputType';

const Input: FC<IInputProps> = ({placeholder, value, setValue}) => {
  const handleChange = (val: any) => {
    setValue?.(val);
  };
  return (
    <RNEInput
      value={value}
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.input}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Input;
