import {View, Text, KeyboardAvoidingView} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {IconButton} from '@src/components/ui/iconbutton';
import {InputWithIcon} from '@src/components/base/inputWithIcon';
import DialogBox from '@src/components/base/dialogBox/DialogBox';

import useTransfer from '@src/hooks/useTransfer';
import {convertCurrency} from '@src/helpers/convertCurrency';
import {WalletBalance} from '@src/components/base/walletBalance';
import {MultipassValidation} from '@src/components/base/multipassValidation';
import {TransactionApproved} from '@src/components/base/transactionApproved';
import SendMoneyBase from '@src/components/base/sendMoneyBase/SendMoneyBase';
import {TransfersBase} from '@src/components/base/transfersBase';
import {ISendProps} from './SendType';

const Send: FC<ISendProps> = ({navigation}) => {
  const {
    walletAmount,
    step,
    iconData,
    beneficiary,
    isDialogVisible,
    amount,
    filteredRecentData,
    inputValue,
    filterRecentTransactionItems,
    setStep,
    setBeneficiary,
    sendMoney,
    handleAmountChange,
    handleSendMoneyToBeneficiary,
    toggleDialogBox,
  } = useTransfer({navigation});

  const formattedCurrency = convertCurrency(walletAmount);
  const [integerPart, decimalPart] = formattedCurrency.split('.');
  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={55}
      style={styles.mainContainer}>
      {step === 0 && (
        <View style={styles.topContainer}>
          <InputWithIcon
            placeholder="Find Phone Number / Bank Account"
            onChangeText={filterRecentTransactionItems}
          />
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
      )}
      {step > 0 && (
        <WalletBalance
          integerPart={integerPart}
          decimalPart={decimalPart}
          beneficiary={beneficiary}
          setBeneficiary={setBeneficiary}
          setStep={setStep}
        />
      )}
      {step === 0 && (
        <TransfersBase
          heading={'Recent Transfers'}
          recentTransactions={filteredRecentData}
          setStep={setStep}
          setBeneficiary={setBeneficiary}
        />
      )}
      {step === 1 && (
        <>
          <SendMoneyBase
            inputValue={inputValue}
            handleAmountChange={handleAmountChange}
            sendMoney={sendMoney}
          />
          <DialogBox
            isVisible={isDialogVisible}
            toggleDialog={toggleDialogBox}
            amount={amount}
            beneficiary={beneficiary.title}
            onPressOk={() => {
              handleSendMoneyToBeneficiary();
            }}
            onPressCancel={toggleDialogBox}
          />
        </>
      )}
      {step === 2 && <MultipassValidation />}
      {step === 3 && (
        <TransactionApproved setStep={setStep} navigation={navigation} />
      )}
    </KeyboardAvoidingView>
  );
};

export default Send;
