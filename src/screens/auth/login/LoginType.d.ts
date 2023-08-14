import {StackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../../navigation/types/AuthStackParamsList';

type LoginScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'Login'
>;

export interface ILoginProps {
  navigation: LoginScreenNavigationProp;
}
