import {View, Image, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {Text} from '../../ui/text';
import {styles} from './styles';
import {IBeneficiaryItem} from './BeneficiaryItemType';

const BeneficiaryItem: FC<IBeneficiaryItem> = ({
  beneficiaryItem,
  onPress,
  dark,
}) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <View style={styles.subContainer}>
        <Image source={beneficiaryItem.icon} />
        <View style={styles.marginLeft}>
          <Text
            style={[
              dark ? styles.textWhite : styles.textDark,
              styles.moneyText,
            ]}>
            {beneficiaryItem.title}
          </Text>
          <Text style={[dark ? styles.dark : styles.light, styles.dateText]}>
            {beneficiaryItem.phone}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BeneficiaryItem;
