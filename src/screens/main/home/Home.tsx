import {View, ScrollView, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {Text} from '../../../components/ui/text';
import {styles} from './styles';
import {IconButton} from '../../../components/ui/iconbutton';
import BottomBase from '../../../components/base/bottomBase/BottomBase';
import {TransactionItem} from '../../../components/base/transactionItem';
import Paypal from '../../../assets/Paypal.png';
import Figma from '../../../assets/Figma.png';
import Envato from '../../../assets/Envato.png';
import Dribble from '../../../assets/Dribble.png';
import {IHomeProps} from './HomeType';

import AddIcon from '../../../assets/components/AddIcon';
import SendMoneyIcon from '../../../assets/components/SendMoneyIcon';
import RequestMoneyIcon from '../../../assets/components/RequestMoneyIcon';
import ScanIcon from '../../../assets/components/ScanIcon';

const transactionData = [
  {id: 0, title: 'Paypal', icon: Paypal, amount: 243, date: 'Sun, 19 Feb 2023'},
  {
    id: 1,
    title: 'Dribble',
    icon: Dribble,
    amount: -489,
    date: 'Sun, 18 Feb 2023',
  },
  {id: 2, title: 'Figma', icon: Figma, amount: -128, date: 'Sun, 17 Feb 2023'},
  {
    id: 3,
    title: 'Envato',
    icon: Envato,
    amount: 1000,
    date: 'Sun, 17 Feb 2023',
  },
];
const Home: FC<IHomeProps> = ({navigation}) => {
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
        navigation.navigate('Send');
      },
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.walletText}>Wallet Balance</Text>
        <Text style={styles.walletAmount}>$12,890</Text>
        <View style={styles.iconsContainer}>
          {iconData.map((item, index) => (
            <View style={styles.icon} key={index}>
              <IconButton onPress={item.onPress} style={styles.iconButton}>
                {item.icon}
              </IconButton>
              <Text style={styles.iconText}>{item.title}</Text>
            </View>
          ))}
        </View>
      </View>
      <BottomBase>
        <View style={styles.flexContainer}>
          <Text style={styles.transactionText}>Transactions</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllButton}>See all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {transactionData.map(item => (
            <TransactionItem key={item.id} transactionItem={item} />
          ))}
        </ScrollView>
      </BottomBase>
    </View>
  );
};

export default Home;
