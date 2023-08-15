import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from '../tab/TabNavigation';

import {Send} from '../../screens/main/send';

const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen name="Send" component={Send} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
