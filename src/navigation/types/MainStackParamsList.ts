import {RouteProp} from '@react-navigation/core';

export type MainStackParamList = {
  Home: undefined;
  Send: undefined;
};

export type HomeScreenRouteProp = RouteProp<MainStackParamList, 'Home'>;
export type SendScreenRouteProp = RouteProp<MainStackParamList, 'Send'>;
