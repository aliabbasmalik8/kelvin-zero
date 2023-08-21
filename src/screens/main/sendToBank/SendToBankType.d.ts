import {MainStackParamList} from './../../../navigation/types/MainStackParamsList';
import {StackNavigationProp} from '@react-navigation/native-stack';

type SendToBankScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  'Send To Bank'
>;

export interface ISendToBankProps {
  navigation: SendToBankScreenNavigationProp;
}
