import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Text} from '@src/components/ui/text';
import {RNCamera} from 'react-native-camera';
import {AppRegistry, Linking} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {Button} from '@src/components/ui/button';
const Scan = () => {
  //   const [scanned, setScanned] = useState(false);

  function onSuccess(e: any) {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  }

  return (
    <View style={styles.mainContainer}>
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={<Text style={styles.centerText}>Scan QRCode.</Text>}
        bottomContent={<Button style={styles.buttonStyle} title="Ok Got It" />}
      />
    </View>
  );
};
AppRegistry.registerComponent('default', () => Scan);

export default Scan;
