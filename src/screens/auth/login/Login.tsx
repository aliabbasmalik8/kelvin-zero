import {View} from 'react-native';
import React, {FC} from 'react';
import {ILoginProps} from './LoginType';
import {styles} from './styles';
import {Text} from '../../../components/ui/text';
const Login: FC<ILoginProps> = ({}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainText}>Welcome Back</Text>
      <Text style={styles.subText}>
        We're excited to have you back, can't wait to see what you've been up to
        since you last logged in.
      </Text>
    </View>
  );
};

export default Login;
