// Librairies
import React from 'react';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import Colors from '../../../constants/Color';
import { DrawerActions} from '@react-navigation/native';

export default function Header(props) {
  const manageScreens = () => {
    if (props.screen && props.screen === 'Home') {
      return 'Accueil';
    } else if (props.screen && props.screen === 'Places') {
      return 'Salons';
    } else if (props.screen && props.screen == 'AddProducts') {
      return 'Proposer un produit'
    }
  };

  return (
    <View>
      <Appbar.Header style={{ backgroundColor: Colors.primary }}>
        {props.screen !== 'Home' ? (
          <>
            <Appbar.Action
              icon= 'menu'
              onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer)}
              color= '#fff'
            />
            <Appbar.Content
              title={manageScreens()}
              style={{ alignItems: 'center' }}
            />
          </>
        ) : (
          <Appbar.Content title={manageScreens()} />
        )}
        <Appbar.Action
          icon='information-outline'
          onPress={() =>
            props.navigation.navigate('Informations')
          }
        />
      </Appbar.Header>
    </View>
  );
}


