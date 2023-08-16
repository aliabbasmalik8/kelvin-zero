import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import React, {FC, useState, useEffect} from 'react';
import {ILoginProps} from './LoginType';
import {Text} from '@src/components/ui/text';
import {Input} from '@src/components/ui/input';
import {Button} from '@src/components/ui/button';
import {styles} from './styles';
import {Checkbox} from '@src/components/ui/checkbox';
import {Divider} from '@src/components/ui/divider';
import {BottomSheet} from '@src/components/ui/bottomsheet';
import Google from '@src/assets/Google.png';
import Apple from '@src/assets/Apple.png';
import Facebook from '@src/assets/Facebook.png';
import Multipass from '@src/assets/Multipass.png';
import LockImage from '@src/assets/LockImage.png';
import useAuth from '@src/hooks/useAuth';

const Login: FC<ILoginProps> = ({}) => {
  const [isVisble, setIsVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const {login} = useAuth();
  const handleEmailChange = (value: any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10,}$/;
    if (value === '') {
      setEmail(value);
      setErrorMessage('');
      return;
    }
    setEmail(value);

    if (!emailRegex.test(value) && !phoneRegex.test(value)) {
      setErrorMessage('Invalid email or phone format');
    } else {
      setErrorMessage('');
    }
  };

  const handleLogin = () => {
    login(email);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 5000);
  }, [isVisble]);

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>Welcome Back</Text>
        <Text style={styles.subText}>
          We're excited to have you back, can't wait to see what you've been up
          to since you last logged in.
        </Text>
      </View>

      <View style={styles.loginContainer}>
        <View style={styles.inputContainer}>
          <Input
            placeholder={'Email or Phone No.'}
            value={email}
            onChange={handleEmailChange}
            errorMessage={errorMessage}
          />
        </View>
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
    </ScrollView>
  );
};

export default Login;
