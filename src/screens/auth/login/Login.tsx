import {Image, TouchableOpacity, View} from 'react-native';
import React, {FC, useState, useEffect} from 'react';
import {ILoginProps} from './LoginType';
import {Text} from '../../../components/ui/text';
import {Input} from '../../../components/ui/input';
import {Button} from '../../../components/ui/button';
import {styles} from './styles';
import {Checkbox} from '../../../components/ui/checkbox';
import {Divider} from '../../../components/ui/divider';
import {BottomSheet} from '../../../components/ui/bottomsheet';

import Google from '~/assets/Google.png';
import Apple from '~/assets/Apple.png';
import Facebook from '~/assets/Facebook.png';
import Multipass from '~/assets/Multipass.png';
import LockImage from '~/assets/LockImage.png';
import useAuth from '../../../hooks/useAuth';

const Login: FC<ILoginProps> = ({}) => {
  const [isVisble, setIsVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const {login} = useAuth();

  const handleLogin = () => {
    login(email);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 3000);
  }, [isVisble]);

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
        <Input
          placeholder={'Email or Phone No.'}
          value={email}
          setValue={setEmail}
        />
        <Button
          title="Login with Multi-Pass"
          style={styles.loginButton}
          onPress={() => {
            setIsVisible(true);
          }}
        />
        <View style={styles.checkBoxCont}>
          <Checkbox title="Remember Me" />
        </View>
      </View>
      <View style={styles.dividerContainer}>
        <Divider>Or sign in with</Divider>
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
      <BottomSheet isVisible={isVisble} onClose={() => setIsVisible(false)}>
        {!isLoggedIn && (
          <View style={styles.bottomSheetContainer}>
            <Image source={Multipass} />
            <View style={styles.bottomSheetTextCont}>
              <Text style={styles.bottomSheetmainText}>
                Login with Multi-Pass
              </Text>
              <Text style={styles.bottomSheetSubText}>
                Tap You card to validate the transaction
              </Text>
            </View>
          </View>
        )}
        {isLoggedIn && (
          <View style={styles.bottomSheetContainer}>
            <Image source={LockImage} />
            <View style={styles.bottomSheetTextCont}>
              <Text style={styles.bottomSheetmainText}>Login Succesfull</Text>
              <Text style={styles.bottomSheetSubText}>
                Transaction Approved
              </Text>
            </View>
            <Button
              title="Back to Home"
              style={styles.backToHomeButton}
              onPress={() => {
                setIsVisible(false);
                setIsLoggedIn(false);
                handleLogin();
              }}
            />
          </View>
        )}
      </BottomSheet>
    </View>
  );
};

export default Login;
