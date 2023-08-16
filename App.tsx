/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {ThemeProvider} from '@rneui/themed';
import {theme} from './src/theme';
import {AuthProvider} from './src/context/AuthContext';
import {WalletProvider} from './src/context/WalletContext';
import AppNavigator from './src/navigation/AppNavigator';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <WalletProvider>
          <AppNavigator />
        </WalletProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
