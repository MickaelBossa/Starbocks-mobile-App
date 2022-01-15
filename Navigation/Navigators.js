// Librairies
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../Constants/Color';

// Ecrans
import HomeScreen from '../Screens/Home';
import PlacesScreen from '../Screens/Places';

// // MainStackNavigator
// const MainStackNavigatorComponent = createStackNavigator();

// export const MainStackNavigator = () => {
//   return (
//     <MainStackNavigatorComponent.Navigator>
//       <MainStackNavigatorComponent.Screen
//         name='Home'
//         component={HomeScreen}
//         options={{ headerShown: false }}
//       />
//       <MainStackNavigatorComponent.Screen
//         name='Places'
//         component={PlacesScreen}
//         options={{ headerShown: false }}
//       />
//     </MainStackNavigatorComponent.Navigator>
//   );
// };

// TabNavigator
const TabNavigator = createBottomTabNavigator();

export const AppTabNavigator = () => {
  return (
    <TabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.primary,
        tabBarActiveBackgroundColor: Colors.primaryFaded,
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Places') {
            iconName = focused ? 'location' : 'location-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      initialRouteName='Home'
    >
      <TabNavigator.Screen
        name='Home'
        component={HomeScreen}
        options={{ title: 'Accueil' }}
      />
      <TabNavigator.Screen
        name='Places'
        component={PlacesScreen}
        options={{ title: 'Salons' }}
      />
    </TabNavigator.Navigator>
  );
};
