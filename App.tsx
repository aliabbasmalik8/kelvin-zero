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
import {TransactionProvider} from '@src/context/TransactionContext';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <TransactionProvider>
          <WalletProvider>
            <AppNavigator />
          </WalletProvider>
        </TransactionProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
