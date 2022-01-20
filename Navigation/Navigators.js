// Librairies
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Color';

// Navigateurs
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Ecrans
import HomeScreen from '../screens/Home';
import PlacesScreen from '../screens/Places';
import InformationsScreen from '../screens/Informations';
import AddProductsScreen from '../screens/AddProducts';

// Composants
import DrawerContentScreen from '../screens/drawer/DrawerContentScreen';

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
          } else if (route.name === 'AddProducts') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      initialRouteName='Home'
    >
      <TabNavigator.Screen
        name='Home'
        component={ModalStackNavigator}
        options={{ title: 'Accueil' }}
      />
      <TabNavigator.Screen
        name='Places'
        component={PlacesScreen}
        options={{ title: 'Salons' }}
      />
      <TabNavigator.Screen 
      name='AddProducts'
      component={AddProductsScreen}
      options={{ title: 'Ajouter un produit' }}
      />
    </TabNavigator.Navigator>
  );
};

// DrawerNavigator
const DrawerNavigator = createDrawerNavigator();

export const AppDrawerNavigator = () => {
  return (
    <DrawerNavigator.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: Colors.primary,
        swipeEnabled: false,
      }}
      drawerContent={(props) => <DrawerContentScreen {...props} />}
      drawerType='slide'
    >
      <DrawerNavigator.Screen
        name='DrawerHome'
        component={AppTabNavigator}
        options={{
          title: 'Accueil',
          drawerIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </DrawerNavigator.Navigator>
  );
};

// ModalNavigator

const ModalNavigator = createStackNavigator();

const ModalStackNavigator = () => {
  return (
    <ModalNavigator.Navigator 
    screenOptions={{
      presentation: "modal",
    }}
    >
      <ModalNavigator.Screen
        name='Main'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <ModalNavigator.Screen
        name='Informations'
        component={InformationsScreen}
        options={{ headerShown: false }}
      />
    </ModalNavigator.Navigator>
  );
};
