import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {BottomBase} from '@src/components/base/bottomBase';
import {IconButton} from '@src/components/ui/iconbutton';

import {InputWithIcon} from '@src/components/base/inputWithIcon';

import {BeneficiaryItem} from '@src/components/base/beneficiaryItem';
import {Input} from '@src/components/ui/input';
import {Input as RNEInput} from '@rneui/themed';
import {Button} from '@src/components/ui/button';
import DialogBox from '@src/components/base/dialogBox/DialogBox';

import Multipass from '@src/assets/Multipass.png';
import LockImage from '@src/assets/LockImage.png';
import useTransfer from '@src/hooks/useTransfer';

const Send = ({navigation}: any) => {
  const {
    walletAmount,
    step,
    iconData,
    beneficiary,
    isDialogVisible,
    amount,
    filteredData,
    filterTransactionItems,
    setStep,
    setBeneficiary,
    sendMoney,
    handleAmountChange,
    handleSendMoneyToBeneficiary,
    toggleDialogBox,
  } = useTransfer({navigation});

  return (
    <View style={styles.mainContainer}>
      {step === 0 && (
        <View style={styles.topContainer}>
          <InputWithIcon
            placeholder="Find Phone No / Bank Account"
            onChangeText={filterTransactionItems}
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
        <View style={styles.topContainer}>
          <Text style={styles.walletText}>Wallet Balance</Text>
          <Text style={styles.walletAmount}>${walletAmount}</Text>
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
            <Text style={styles.transactionText}>Recent Transfers</Text>
          </View>
          <ScrollView>
            {filteredData.map(item => (
              <BeneficiaryItem
                dark={false}
                key={item.id}
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
                onChangeText={handleAmountChange}
                containerStyle={styles.amountInput}
                textAlign="center"
                textContentType="telephoneNumber"
                inputStyle={styles.amountInputStyle}
                keyboardType="numeric"
              />
              <Input placeholder="Write your note here" textArea={true} />
            </View>
            <View>
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
            <Image source={Multipass} />
            <View style={styles.bottomSheetTextCont}>
              <Text style={styles.bottomSheetmainText}>
                Validate with Multi-Pass
              </Text>
              <Text style={styles.bottomSheetSubText}>
                Tap You card to validate the transaction
              </Text>
            </View>
          </View>
        </BottomBase>
      )}
      {step === 3 && (
        <BottomBase>
          <View style={styles.bottomSheetContainer}>
            <Image source={LockImage} />
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
                navigation.goBack();
              }}
            />
          </View>
        </BottomBase>
      )}
    </View>
  );
};

export default Send;
