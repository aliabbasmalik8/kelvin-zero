import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '@src/screens/auth/welcome/Welcome';
import Login from '@src/screens/auth/login/Login';
import {StatusBar, Platform} from 'react-native';

const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
  const isAndroid = Platform.OS === 'android';

  return (
    <NavigationContainer>
      {isAndroid && (
        <StatusBar
          barStyle="dark-content"
          backgroundColor={'white'}
          translucent={true}
        />
      )}
      {!isAndroid && (
        <StatusBar barStyle="dark-content" backgroundColor="white" />
      )}
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;
