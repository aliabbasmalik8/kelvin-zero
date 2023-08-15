import React from 'react';
import AuthNavigation from './auth/AuthNavigation';
import MainNavigation from './main/MainNavigation';
import useAuth from '../hooks/useAuth';

const AppNavigator = () => {
  const {isLoggedIn} = useAuth();
  return <>{!isLoggedIn ? <AuthNavigation /> : <MainNavigation />}</>;
};

export default AppNavigator;
