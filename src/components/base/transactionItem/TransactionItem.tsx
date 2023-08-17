import {View, Image, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {Text} from '../../ui/text';
import {styles} from './styles';
import {ITransactionItem} from './TransactionItemType';
import {convertCurrency} from '@src/helpers/convertCurrency';

const TransactionItem: FC<ITransactionItem> = ({transactionItem}) => {
  const formattedCurrency = convertCurrency(transactionItem.amount);
  const [integerPart, decimalPart] = formattedCurrency.split('.');
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Image source={transactionItem.icon} />
        <View style={styles.marginLeft}>
          <Text style={styles.mainText}>{transactionItem.title}</Text>
          <Text style={styles.dateText}>{transactionItem.date}</Text>
        </View>
      </View>
      <View style={styles.moneyContainer}>
        <Text
          style={[
            transactionItem.amount < 0 ? styles.red : styles.green,
            styles.moneyText,
          ]}>
          {integerPart}.
        </Text>
        <Text
          style={[
            transactionItem.amount < 0 ? styles.red : styles.green,
            styles.decimalText,
          ]}>
          {decimalPart}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionItem;
