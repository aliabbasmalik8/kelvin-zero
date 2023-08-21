import {KeyboardAvoidingView, View} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {InputWithIcon} from '@src/components/base/inputWithIcon';
import {IconButton} from '@src/components/ui/iconbutton';
import DialogBox from '@src/components/base/dialogBox/DialogBox';

import AddIcon from '@src/assets/components/AddIcon';
import useTransfer from '@src/hooks/useTransfer';
import {convertCurrency} from '@src/helpers/convertCurrency';
import {WalletBalance} from '@src/components/base/walletBalance';
import {MultipassValidation} from '@src/components/base/multipassValidation';
import {TransactionApproved} from '@src/components/base/transactionApproved';
import SendMoneyBase from '@src/components/base/sendMoneyBase/SendMoneyBase';
import {TransfersBase} from '@src/components/base/transfersBase';
import {ISendToBankProps} from './SendToBankType';

const SendToBank: FC<ISendToBankProps> = ({navigation}) => {
  const {
    walletAmount,
    step,
    beneficiary,
    isDialogVisible,
    amount,
    filteredData,
    inputValue,
    setStep,
    setBeneficiary,
    sendMoney,
    handleAmountChange,
    handleSendMoneyToBeneficiary,
    toggleDialogBox,
    filterTransactionItems,
  } = useTransfer({navigation});

  const formattedCurrency = convertCurrency(walletAmount);
  const [integerPart, decimalPart] = formattedCurrency.split('.');

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={60}
      style={styles.mainContainer}>
      {step === 0 && (
        <View style={styles.topContainer}>
          <InputWithIcon
            placeholder="Search"
            onChangeText={filterTransactionItems}
          />
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
          heading={'Bank Accounts'}
          recentTransactions={filteredData}
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
      {step === 0 && (
        <View style={styles.addButtonContainer}>
          <IconButton style={styles.addButton}>
            <AddIcon />
          </IconButton>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

export default SendToBank;
