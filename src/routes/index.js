import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from '../pages/SignIn';
import Home from '../pages/Home';
import Bluetooth from '../pages/Bluetooth';
import Funcionalidades from '../pages/Funcionalidades';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

const Routes = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#10104F' }
    }}
  >
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Bluetooth" component={Bluetooth} />
    <Stack.Screen name="Funcionalidades" component={Funcionalidades} />

  </Stack.Navigator>
);

export default Routes;
