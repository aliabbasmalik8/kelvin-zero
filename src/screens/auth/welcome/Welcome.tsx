import {View, Image} from 'react-native';
import React, {FC} from 'react';
import {Button} from '../../../components/ui/button';
import {Text} from '../../../components/ui/text';
import {styles} from './styles';

import Logo from '~/assets/Logo.png';
import Money from '~/assets/Money.png';
import WelcomeBg from '~/assets/WelcomeBg.png';

import {IWelcomeProps} from './WelcomeType';

const Welcome: FC<IWelcomeProps> = ({navigation}) => {
  const navigateToLogin = () => {
    console.log('Logi');
    navigation.navigate('Login');
  };
  return (
    <View style={styles.mainContainer}>
      <Image source={WelcomeBg} style={styles.backgroundStyle} />
      <View style={styles.flexContainer}>
        <Image source={Logo} style={styles.logoStyle} resizeMode="cover" />
        <Image source={Money} style={styles.moneyStyle} resizeMode="cover" />
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.mainText}>Multi-Pass Functional App</Text>
        <Text style={styles.subText}>
          Streamline your personal finance with user-friendly features and
          robust security
        </Text>
        <Button title="Get Started" onPress={navigateToLogin} />
      </View>
    </View>
  );
};

export default Welcome;
