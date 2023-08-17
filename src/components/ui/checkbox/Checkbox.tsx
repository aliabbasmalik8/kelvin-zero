import React, {FC} from 'react';
import {CheckBox as RNECheckbox} from '@rneui/themed';
import {ICheckboxProps} from './CheckboxType';

const Checkbox: FC<ICheckboxProps> = ({title}) => {
  const [checked, setChecked] = React.useState(false);
  const toggleCheckbox = () => setChecked(!checked);
  return (
    <RNECheckbox
      checked={checked}
      onPress={toggleCheckbox}
      titleProps={{
        style: {color: '#A5A5A5', fontSize: 12, fontFamily: 'Poppins-Regular'},
      }}
      title={title}
    />
  );
};

export default Checkbox;
