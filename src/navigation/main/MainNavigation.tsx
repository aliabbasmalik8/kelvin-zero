/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from '../tab/TabNavigation';
import {Send} from '@src/screens/main/send';
import {CustomHeader} from '@src/components/base/customHeader';
import {SendToBank} from '@src/screens/main/sendToBank';
import {SendToFriend} from '@src/screens/main/sendToFriend';

const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Send"
          component={Send}
          options={{header: props => <CustomHeader {...props} />}}
        />
        <Stack.Screen
          name="Send To Bank"
          component={SendToBank}
          options={{header: props => <CustomHeader {...props} />}}
        />
        <Stack.Screen
          name="Send To Friend"
          component={SendToFriend}
          options={{header: props => <CustomHeader {...props} />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
