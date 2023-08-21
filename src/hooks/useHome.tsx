import React from 'react';
import AddIcon from '@src/assets/components/AddIcon';
import SendMoneyIcon from '@src/assets/components/SendMoneyIcon';
import RequestMoneyIcon from '@src/assets/components/RequestMoneyIcon';
import ScanIcon from '@src/assets/components/ScanIcon';
import Figma from '@src/assets/Figma.png';
import Paypal from '@src/assets/Paypal.png';
import Dribble from '@src/assets/Dribble.png';
import Envato from '@src/assets/Envato.png';
import {ISendProps} from '@src/screens/main/send/SendType';

const useHome = ({navigation}: ISendProps) => {
  const transactionData = [
    {
      id: 0,
      title: 'Paypal',
      icon: Paypal,
      amount: 243,
      date: 'Sun, 19 Feb 2023',
    },
    {
      id: 1,
      title: 'Dribble',
      icon: Dribble,
      amount: -489,
      date: 'Sun, 18 Feb 2023',
    },
    {
      id: 2,
      title: 'Figma',
      icon: Figma,
      amount: -128,
      date: 'Sun, 17 Feb 2023',
    },
    {
      id: 3,
      title: 'Envato',
      icon: Envato,
      amount: 1000,
      date: 'Sun, 17 Feb 2023',
    },
  ];
  const iconData = [
    {
      id: 0,
      title: 'Top Up',
      icon: <AddIcon />,
      onPress: () => {
        navigation.navigate('Send');
      },
    },
    {
      id: 1,
      title: 'Send',
      icon: <SendMoneyIcon />,
      onPress: () => {
        navigation.navigate('Send');
      },
    },
    {
      id: 2,
      title: 'Request',
      icon: <RequestMoneyIcon />,
      onPress: () => {
        navigation.navigate('Send');
      },
    },
    {
      id: 4,
      title: 'Scan',
      icon: <ScanIcon />,
      onPress: () => {
        navigation.navigate('Scan');
      },
    },
  ];
  return {
    iconData,
    transactionData,
  };
};
export default useHome;
