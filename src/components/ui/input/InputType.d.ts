import {StyleProp} from 'react-native';

export interface IInputProps {
  placeholder?: string;
  testID?: string;
  style?: StyleProp;
  onPress?: () => void;
}
