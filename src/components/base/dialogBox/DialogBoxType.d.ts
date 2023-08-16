import {FunctionWithParam} from '@src/types/types';
import {StyleProp} from 'react-native';

export interface IDialogBoxProps {
  isVisible: boolean;
  toggleDialog: FunctionWithParam;
  amount: string;
  beneficiary: string;
  testID?: string;
  style?: StyleProp;
  onPressOk: FunctionWithParam;
  onPressCancel: FunctionWithParam;
}
