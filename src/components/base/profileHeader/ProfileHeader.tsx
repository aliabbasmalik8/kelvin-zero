import {View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Avatar1 from '@src/assets/Avatar1.png';
import {styles} from './styles';
import {Text} from '../../ui/text';
import {IconButton} from '@src/components/ui/iconbutton';
import NotificationIcon from '@src/assets/components/NotificationIcon';
import useAuth from '@src/hooks/useAuth';

const ProfileHeader = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const {logout} = useAuth();

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    logout();
  };
  return (
    <View style={styles.headerContainer}>
      <View style={styles.inlineContainer}>
        <TouchableOpacity
          style={styles.inlineContainer}
          onPress={toggleDropdown}>
          <Image source={Avatar1} style={styles.avatar} />
        </TouchableOpacity>

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
      {showDropdown && (
        <View style={styles.dropdown}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export default ProfileHeader;
