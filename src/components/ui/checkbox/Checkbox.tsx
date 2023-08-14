import React, {FC} from 'react';
import {CheckBox as RNECheckbox} from '@rneui/themed';
import {ICheckboxProps} from './CheckboxType';

const Checkbox: FC<ICheckboxProps> = ({title}) => {
  const [checked, setChecked] = React.useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  return (
    <RNECheckbox
      checked={checked}
      onPress={toggleCheckbox}
      //   iconType="material-community"
      //   checkedIcon="checkbox-marked"
      //   uncheckedIcon="checkbox-blank-outline"
      //   checkedColor="red"
      title={title}
    />
  );
};

export default Checkbox;
