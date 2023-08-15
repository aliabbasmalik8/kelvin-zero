import {View} from 'react-native';
import React, {FC} from 'react';
import {IBottomBaseProps} from './BottomBaseType';
import {styles} from './styles';

const BottomBase: FC<IBottomBaseProps> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default BottomBase;
