import {RouteProp} from '@react-navigation/core';

export type AuthStackParamList = {
  Welcome: undefined;
  Login: undefined;
};

export type WelcomeScreenRouteProp = RouteProp<AuthStackParamList, 'Welcome'>;
export type LoginScreenRouteProp = RouteProp<AuthStackParamList, 'Login'>;
