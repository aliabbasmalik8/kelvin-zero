import {View, Image} from 'react-native';
import React from 'react';
import Avatar1 from '@src/assets/Avatar1.png';
import {styles} from './styles';
import {Text} from '../../ui/text';
import {IconButton} from '@src/components/ui/iconbutton';
import NotificationIcon from '@src/assets/components/NotificationIcon';

const ProfileHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.inlineContainer}>
        <Image source={Avatar1} style={styles.avatar} />
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>Hi Matt</Text>
          <Text style={styles.emailText}>matt@zero.com</Text>
        </View>
      </View>
      <View>
        <IconButton style={styles.notificationButton}>
          <NotificationIcon />
        </IconButton>
      </View>
    </View>
  );
};
export default ProfileHeader;
