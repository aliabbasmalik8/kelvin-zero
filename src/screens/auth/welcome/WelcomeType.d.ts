import {StackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../../navigation/types/AuthStackParamsList';

type WelcomeScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'Welcome'
>;

export interface IWelcomeProps {
  navigation: WelcomeScreenNavigationProp;
}
