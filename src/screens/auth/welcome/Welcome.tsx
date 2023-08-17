import {View, Image} from 'react-native';
import React, {FC} from 'react';
import {Button} from '@src/components/ui/button';
import {Text} from '@src/components/ui/text';
import {styles} from './styles';

import Logo from '@src/assets/Logo.png';
import Money from '@src/assets/Money.png';
import BG from '@src/assets/BG.png';

import {IWelcomeProps} from './WelcomeType';

const Welcome: FC<IWelcomeProps> = ({navigation}) => {
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.mainContainer}>
      <Image source={BG} style={styles.backgroundStyle} />
      <View style={styles.flexContainer}>
        <Image source={Logo} style={styles.logoStyle} resizeMode="cover" />
        <Image source={Money} style={styles.moneyStyle} resizeMode="cover" />
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.mainText}>Multi-Pass Financial App</Text>
        <Text style={styles.subText}>
          Streamline your personal finance with user-friendly features and
          robust security
        </Text>
        <View style={styles.buttonContainer}>
          <Button title="Get Started" onPress={navigateToLogin} />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
