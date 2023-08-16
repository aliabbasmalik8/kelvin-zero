import {ScrollView} from 'react-native';
import React, {FC} from 'react';
import {IBottomBaseProps} from './BottomBaseType';
import {styles} from './styles';

const BottomBase: FC<IBottomBaseProps> = ({children}) => {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
};

export default BottomBase;
