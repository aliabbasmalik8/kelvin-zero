import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {BottomBase} from '@src/components/base/bottomBase';
import {InputWithIcon} from '@src/components/base/inputWithIcon';
import {BeneficiaryItem} from '@src/components/base/beneficiaryItem';
import {IconButton} from '@src/components/ui/iconbutton';
import AddIcon from '@src/assets/components/AddIcon';
import useTransfer from '@src/hooks/useTransfer';

const SendToBank = ({navigation}: any) => {
  const {transactionData} = useTransfer({navigation});
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <InputWithIcon placeholder="Search" />
      </View>
      <BottomBase>
        <View style={styles.flexContainer}>
          <Text style={styles.transactionText}>Bank Account</Text>
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
        <View style={styles.addButtonContainer}>
          <IconButton style={styles.addButton}>
            <AddIcon />
          </IconButton>
        </View>
      </BottomBase>
    </View>
  );
};

export default SendToBank;
