// Librairies
import React from 'react';
import { AppDrawerNavigator } from './Navigators';
import { NavigationContainer } from '@react-navigation/native';

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <AppDrawerNavigator />
    </NavigationContainer>
  );
}
