import {View, Image, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {Text} from '../../ui/text';
import {styles} from './styles';
import {ITransactionItem} from './TransactionItemType';

const TransactionItem: FC<ITransactionItem> = ({transactionItem}) => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Image source={transactionItem.icon} />
        <View style={styles.marginLeft}>
          <Text style={styles.mainText}>{transactionItem.title}</Text>
          <Text style={styles.dateText}>{transactionItem.date}</Text>
        </View>
      </View>
      <Text
        style={[
          transactionItem.amount < 0 ? styles.red : styles.green,
          styles.moneyText,
        ]}>
        $ {transactionItem.amount}
      </Text>
    </TouchableOpacity>
  );
};

export default TransactionItem;
