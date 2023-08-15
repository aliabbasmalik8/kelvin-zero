/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {ProfileHeader} from '../../components/base/profileHeader';
import {Home} from '../../screens/main/home';
import {MyTabBar} from '../../components/base/mytab';
import {Wallet} from '../../screens/main/wallet';
import {Profile} from '../../screens/main/profile';
import {Chart} from '../../screens/main/chart';

import WalletIcon from '../../assets/components/WalletIcon';
import HomeIcon from '../../assets/components/HomeIcon';
import ChartsIcon from '../../assets/components/ChartIcon';
import ProfileIcon from '../../assets/components/ProfileIcon';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const screenIcons = {
    Home: HomeIcon,
    Wallet: WalletIcon,
    Charts: ChartsIcon,
    Profile: ProfileIcon,
  };
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} screenIcons={screenIcons} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{header: () => <ProfileHeader />}}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{header: () => <ProfileHeader />}}
      />
      <Tab.Screen
        name="Charts"
        component={Chart}
        options={{header: () => <ProfileHeader />}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{header: () => <ProfileHeader />}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
