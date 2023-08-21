import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {InputWithIcon} from '@src/components/base/inputWithIcon';
import DialogBox from '@src/components/base/dialogBox/DialogBox';
import useTransfer from '@src/hooks/useTransfer';
import {convertCurrency} from '@src/helpers/convertCurrency';
import {TransactionApproved} from '@src/components/base/transactionApproved';
import {MultipassValidation} from '@src/components/base/multipassValidation';
import SendMoneyBase from '@src/components/base/sendMoneyBase/SendMoneyBase';
import {WalletBalance} from '@src/components/base/walletBalance';
import {TransfersBase} from '@src/components/base/transfersBase';
import {ISendToFriendProps} from './SendToFriendType';

const SendToFriend: FC<ISendToFriendProps> = ({navigation}) => {
  const {
    walletAmount,
    step,
    beneficiary,
    isDialogVisible,
    amount,
    filteredData,
    recentTransactions,
    inputValue,
    filterTransactionItems,
    setStep,
    setBeneficiary,
    sendMoney,
    handleAmountChange,
    handleSendMoneyToBeneficiary,
    toggleDialogBox,
  } = useTransfer({navigation});
  const formatTitle = (title: string) => {
    const titleParts = title.split(' ');
    const firstName = titleParts[0];
    const lastNameInitial = titleParts.length > 1 ? titleParts[1][0] : '';
    return `${firstName} ${lastNameInitial}.`;
  };

  const formattedCurrency = convertCurrency(walletAmount);
  const [integerPart, decimalPart] = formattedCurrency.split('.');
  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={60}
      style={styles.mainContainer}>
      {step === 0 && (
        <View>
          <View style={styles.topContainer}>
            <InputWithIcon
              placeholder="Find Phone Number / Bank Account"
              onChangeText={filterTransactionItems}
            />
          </View>
          <View style={styles.friendsContainer}>
            {filteredData.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setStep(1);
                  setBeneficiary(item);
                }}>
                <Image style={styles.iconImage} source={item.icon} />
                <Text style={styles.titleText}>{formatTitle(item.title)}</Text>
              </TouchableOpacity>
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
          recentTransactions={recentTransactions}
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

export default SendToFriend;
