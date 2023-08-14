/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import AuthNavigation from './src/navigation/auth/AuthNavigation';
import {ThemeProvider} from '@rneui/themed';
import {theme} from './src/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <AuthNavigation />
    </ThemeProvider>
  );
}

export default App;
