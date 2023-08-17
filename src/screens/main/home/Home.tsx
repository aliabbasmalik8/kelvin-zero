import {View, ScrollView, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {Text} from '@src/components/ui/text';
import {styles} from './styles';
import {IconButton} from '@src/components/ui/iconbutton';
import {BottomBase} from '@src/components/base/bottomBase';
import {TransactionItem} from '@src/components/base/transactionItem';
import {IHomeProps} from './HomeType';
import useWallet from '@src/hooks/useWallet';
import useHome from '@src/hooks/useHome';
import {convertCurrency} from '@src/helpers/convertCurrency';

const Home: FC<IHomeProps> = ({navigation}) => {
  const {walletAmount} = useWallet();
  const formattedCurrency = convertCurrency(walletAmount);
  const [integerPart, decimalPart] = formattedCurrency.split('.');
  const {transactionData, iconData} = useHome({navigation});
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.walletText}>Wallet Balance</Text>
        <View style={styles.amountContainer}>
          <Text style={styles.walletAmount}>{integerPart}.</Text>
          <Text style={styles.walletAmountDecimal}>{decimalPart}</Text>
        </View>
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
        <ScrollView style={styles.padding}>
          {transactionData.map(item => (
            <TransactionItem key={item.id} transactionItem={item} />
          ))}
        </ScrollView>
      </BottomBase>
    </View>
  );
};

export default Home;
