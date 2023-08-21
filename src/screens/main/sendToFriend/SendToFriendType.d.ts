import {MainStackParamList} from '../../../navigation/types/MainStackParamsList';
import {StackNavigationProp} from '@react-navigation/native-stack';

type SendToFriendScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  'Send To Friend'
>;

export interface ISendToFriendProps {
  navigation: SendToFriendScreenNavigationProp;
}
