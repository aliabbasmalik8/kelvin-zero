import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {BottomBase} from '@src/components/base/bottomBase';
import {InputWithIcon} from '@src/components/base/inputWithIcon';
import {BeneficiaryItem} from '@src/components/base/beneficiaryItem';
import {IconButton} from '@src/components/ui/iconbutton';
import {Input} from '@src/components/ui/input';
import {Input as RNEInput} from '@rneui/themed';
import DialogBox from '@src/components/base/dialogBox/DialogBox';

import {Button} from '@src/components/ui/button';
import Multipass from '@src/assets/Multipass.png';
import LockImage from '@src/assets/LockImage.png';
import AddIcon from '@src/assets/components/AddIcon';
import useTransfer from '@src/hooks/useTransfer';
import {Select} from '@src/components/ui/select';
import {convertCurrency} from '@src/helpers/convertCurrency';

const SendToBank = ({navigation}: any) => {
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
    <View style={styles.mainContainer}>
      {step === 0 && (
        <View style={styles.topContainer}>
          <InputWithIcon
            placeholder="Search"
            onChangeText={filterTransactionItems}
          />
        </View>
      )}

      {step > 0 && (
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
      )}
      {step === 0 && (
        <BottomBase>
          <View style={styles.flexContainer}>
            <Text style={styles.transactionText}>Bank Account</Text>
            <Select />
          </View>
          <ScrollView>
            {filteredData.map((item, index) => (
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
      )}
      {step === 1 && (
        <BottomBase>
          <View style={styles.sendContainer}>
            <View>
              <RNEInput
                placeholder="$"
                value={`${inputValue}`}
                onChangeText={handleAmountChange}
                containerStyle={styles.amountInput}
                textAlign="center"
                textContentType="telephoneNumber"
                inputStyle={styles.amountInputStyle}
                keyboardType="numeric"
              />

              <Input
                placeholder="Write your note here"
                textArea={true}
                multiline={true}
              />
            </View>
            <View style={styles.sendButton}>
              <Button title="Send Money" onPress={sendMoney} />
            </View>
          </View>
          <DialogBox
            isVisible={isDialogVisible}
            toggleDialog={toggleDialogBox}
            amount={amount}
            beneficiary={beneficiary.title}
            onPressOk={handleSendMoneyToBeneficiary}
            onPressCancel={toggleDialogBox}
          />
        </BottomBase>
      )}
      {step === 2 && (
        <BottomBase>
          <View style={styles.bottomSheetContainer}>
            <Image style={styles.image} source={Multipass} />
            <View style={styles.bottomSheetTextCont}>
              <Text style={styles.bottomSheetmainText}>
                Validate with {'\n'}Multi-Pass
              </Text>
              <Text style={styles.bottomSheetSubText}>
                Tap your card to validate {'\n'}the transaction
              </Text>
            </View>
          </View>
        </BottomBase>
      )}
      {step === 3 && (
        <BottomBase>
          <View style={styles.bottomSheetContainer}>
            <Image style={styles.image} source={LockImage} />
            <View style={styles.bottomSheetTextCont}>
              <Text style={styles.bottomSheetmainText}>Successfully Sent</Text>
              <Text style={styles.bottomSheetSubText}>
                Transaction Approved
              </Text>
            </View>
            <Button
              title="Back to Home"
              style={styles.backToHomeButton}
              onPress={() => {
                setStep(0);
                navigation.navigate('Tabs');
              }}
            />
          </View>
        </BottomBase>
      )}
      {step === 0 && (
        <View style={styles.addButtonContainer}>
          <IconButton style={styles.addButton}>
            <AddIcon />
          </IconButton>
        </View>
      )}
    </View>
  );
};

export default SendToBank;
