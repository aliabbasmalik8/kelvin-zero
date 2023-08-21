import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {BeneficiaryItem} from '../beneficiaryItem';
import {styles} from './styles';
import {IWalletBalanceProps} from './WalletBalanceType';

const WalletBalance: FC<IWalletBalanceProps> = ({
  integerPart,
  decimalPart,
  beneficiary,
  setBeneficiary,
  setStep,
}) => {
  return (
    <View style={styles.topContainer}>
      <Text style={styles.walletText}>Wallet Balance</Text>
      <View style={styles.amountContainer}>
        <Text style={styles.walletAmount}>{integerPart}.</Text>
        <Text style={styles.walletAmountDecimal}>{decimalPart}</Text>
      </View>
      <View style={styles.iconsContainer}>
        <BeneficiaryItem
          dark={true}
          beneficiaryItem={beneficiary}
          onPress={() => {
            setStep(0);
            setBeneficiary('');
          }}
        />
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => {
            setStep(0);
            setBeneficiary('');
          }}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WalletBalance;
