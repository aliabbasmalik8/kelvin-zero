import React, {FC} from 'react';
import {BottomSheet as RNEBottomSheet} from '@rneui/themed';
import {IBottomSheetProps} from './BottomSheetType';
import {styles} from './styles';
import {StatusBar} from 'react-native';
const BottomSheet: FC<IBottomSheetProps> = ({children, isVisible, onClose}) => {
  return (
    <RNEBottomSheet
      containerStyle={styles.containerStyle}
      isVisible={isVisible}
      onBackdropPress={onClose}
      backdropStyle={styles.backdropStyle}>
      {/* <StatusBar hidden /> */}
      {children}
    </RNEBottomSheet>
  );
};

export default BottomSheet;
