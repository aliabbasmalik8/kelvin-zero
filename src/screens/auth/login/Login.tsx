import {Image, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {ILoginProps} from './LoginType';
import {Text} from '../../../components/ui/text';
import Input from '../../../components/ui/input/Input';
import {Button} from '../../../components/ui/button';
import {styles} from './styles';
import {Checkbox} from '../../../components/ui/checkbox';
import Divider from '../../../components/ui/divider/Divider';

import Google from '~/assets/Google.png';
import Apple from '~/assets/Apple.png';
import Facebook from '~/assets/Facebook.png';

const Login: FC<ILoginProps> = ({}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Welcome Back</Text>
        <Text style={styles.subText}>
          We're excited to have you back, can't wait to see what you've been up
          to since you last logged in.
        </Text>
      </View>

      <View style={styles.loginContainer}>
        <Input placeholder={'Email or Phone No.'} />
        <Button title="Login with Multi-Pass" />
        <Checkbox title="Remember Me" />
      </View>
      <View style={styles.dividerContainer}>
        <Divider>Or sign in as</Divider>
      </View>
      <View style={styles.altLoginCont}>
        <View style={styles.altLogin}>
          <Image source={Google} />
          <Image source={Apple} />
          <Image source={Facebook} />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomMainText}>
          By logging, you agree to our{' '}
          <Text style={styles.highlightedText}>Terms and Condition</Text> and{' '}
          <Text style={styles.highlightedText}>Privacy Policy</Text>
        </Text>
        <View style={styles.signUpTextCont}>
          <Text style={styles.signUpText}>Already have an account</Text>
          <TouchableOpacity>
            <Text style={styles.signupButton}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
