// Librairies
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Ecrans
import HomeScreen from '../Screens/Home';
import PlacesScreen from '../Screens/Places';

// MainStackNavigator
const MainStackNavigatorComponent = createStackNavigator();

export const MainStackNavigator = () => {
    return(
        <MainStackNavigatorComponent.Navigator>
            <MainStackNavigatorComponent.Screen name='Home' component={HomeScreen} options={{ headerShown: false}}/>
            <MainStackNavigatorComponent.Screen name='Places' component={PlacesScreen} options={{ headerShown: false}} />
        </MainStackNavigatorComponent.Navigator>
    );
};