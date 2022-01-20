// Librairies
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import Colors from './constants/Color';

// Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import placesReducer from './store/reducers/places';
import productsReducer from './store/reducers/products';

// Composants
import AppNavigator from './navigation/AppNavigator';


const rootReducer = combineReducers({
  places: placesReducer,
  products: productsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  // Police personnalisée
  let [fontsLoaded] = useFonts({
    'Montserrat-Black': require('./assets/fonts/Montserrat-Black.ttf'),
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <ActivityIndicator size='large' color={Colors.primary} style={{ flex: 1 }} />
    );
  }

  return (
    <>
      <Provider store={store}>
        <AppNavigator />

        <StatusBar style='auto' />
      </Provider>
    </>
  );
}
