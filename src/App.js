import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#10104F" />
      <View style={{ flex: 1, backgroundColor: '#10104F' }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
