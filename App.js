// Librairies
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

// Composants
import AppNavigator from './Navigation/AppNavigator';

export default function App() {
  // Police personnalisée
  let [fontsLoaded] = useFonts({
    'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <ActivityIndicator size='large' color='#006341' style={{ flex: 1 }} />
    );
  }

  return (
    <>
      <AppNavigator />

      <StatusBar style='auto' />
    </>
  );
}
