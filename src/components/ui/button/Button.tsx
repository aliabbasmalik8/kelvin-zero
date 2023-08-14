import {Button as RNEButton} from '@rneui/themed';
import React, {FC} from 'react';
import {IButtonProps} from './ButtonType';
import {styles} from './styles';

const Button: FC<IButtonProps> = ({title, onPress}) => {
  return (
    <RNEButton
      buttonStyle={styles.buttonStyles}
      containerStyle={styles.containerStyle}
      title={title}
      onPress={onPress}
    />
  );
};

export default Button;
