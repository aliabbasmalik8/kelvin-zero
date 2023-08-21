import {MainStackParamList} from './../../../navigation/types/MainStackParamsList';
import {StackNavigationProp} from '@react-navigation/native-stack';

type SendScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Send'>;

export interface ISendProps {
  navigation: SendScreenNavigationProp;
}
