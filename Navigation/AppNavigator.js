// Librairies
import React from 'react';
import { MainStackNavigator } from './Navigators';
import { NavigationContainer } from '@react-navigation/native';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
