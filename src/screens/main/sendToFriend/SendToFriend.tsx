import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {BottomBase} from '@src/components/base/bottomBase';
import {InputWithIcon} from '@src/components/base/inputWithIcon';
import {BeneficiaryItem} from '@src/components/base/beneficiaryItem';
import useTransfer from '@src/hooks/useTransfer';

const SendToFriend = ({navigation}: any) => {
  const {transactionData} = useTransfer({navigation});
  const formatTitle = (title: string) => {
    const titleParts = title.split(' ');
    const firstName = titleParts[0];
    const lastNameInitial = titleParts.length > 1 ? titleParts[1][0] : '';
    return `${firstName} ${lastNameInitial}.`;
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <InputWithIcon placeholder="Find Phone No. / Bank Account" />
      </View>
      <View style={styles.friendsContainer}>
        {transactionData.map(item => (
          <View key={item.id}>
            <Image source={item.icon} />
            <Text style={styles.titleText}>{formatTitle(item.title)}</Text>
          </View>
        ))}
      </View>

      <BottomBase>
        <View style={styles.flexContainer}>
          <Text style={styles.transactionText}>Recent Transfers</Text>
        </View>
        <ScrollView>
          {transactionData.map(item => (
            <BeneficiaryItem
              dark={false}
              key={item.id}
              beneficiaryItem={item}
              onPress={() => {}}
            />
          ))}
        </ScrollView>
      </BottomBase>
    </View>
  );
};

export default SendToFriend;
