import {StackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../../navigation/types/MainStackParamsList';

type HomeScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Home'>;

export interface IHomeProps {
  navigation: HomeScreenNavigationProp;
}
