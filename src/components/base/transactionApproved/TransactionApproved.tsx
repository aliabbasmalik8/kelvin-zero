import {View, Text, Image} from 'react-native';
import React, {FC} from 'react';
import {BottomBase} from '../bottomBase';
import {styles} from './styles';
import LockImage from '@src/assets/LockImage.png';
import {Button} from '@src/components/ui/button';
import {ITransactionApprovedProps} from './TransactionApprovedType';

const TransactionApproved: FC<ITransactionApprovedProps> = ({
  setStep,
  navigation,
}) => {
  return (
    <BottomBase>
      <View style={styles.bottomSheetContainer}>
        <Image style={styles.image} source={LockImage} />
        <View style={styles.bottomSheetTextCont}>
          <Text style={styles.bottomSheetmainText}>Successfully Sent</Text>
          <Text style={styles.bottomSheetSubText}>Transaction Approved</Text>
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
  );
};

export default TransactionApproved;
