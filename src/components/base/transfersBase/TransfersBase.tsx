import {View, Text, ScrollView} from 'react-native';
import React, {FC} from 'react';
import {BottomBase} from '../bottomBase';
import {styles} from './styles';
import {BeneficiaryItem} from '../beneficiaryItem';
import {ITransfersBaseProps} from './TransfersBaseType';
import {Select} from '@src/components/ui/select';
const TransfersBase: FC<ITransfersBaseProps> = ({
  heading,
  recentTransactions,
  setStep,
  setBeneficiary,
}) => {
  return (
    <BottomBase>
      <View style={styles.flexContainer}>
        <Text style={styles.transactionText}>{heading}</Text>
        {heading === 'Bank Accounts' && <Select />}
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {recentTransactions?.map((item, index) => (
          <BeneficiaryItem
            dark={false}
            key={index}
            beneficiaryItem={item}
            onPress={() => {
              setStep(1);
              setBeneficiary(item);
            }}
          />
        ))}
      </ScrollView>
    </BottomBase>
  );
};

export default TransfersBase;
