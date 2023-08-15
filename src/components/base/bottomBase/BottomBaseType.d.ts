import {ReactNode} from 'react';
import {StyleProp} from 'react-native';

export interface IBottomBaseProps {
  children: ReactNode;
  testID?: string;
  style?: StyleProp;
}
