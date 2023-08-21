import {View, Text, Image} from 'react-native';
import React from 'react';
import {BottomBase} from '../bottomBase';
import {styles} from './styles';
import Multipass from '@src/assets/Multipass.png';

const MultipassValidation = () => {
  return (
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
  );
};

export default MultipassValidation;
