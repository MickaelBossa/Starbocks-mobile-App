// Librairies
import * as React from 'react';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import Colors from '../../../Constants/Color';

export default function Header(props) {
  const manageScreens = () => {
    if (props.screen && props.screen === 'Home') {
      return 'Accueil';
    } else if (props.screen && props.screen === 'Places') {
      return 'Salons';
    }
  };

  return (
    <View>
      <Appbar.Header style={{ backgroundColor: Colors.primary }}>
        {props.screen !== 'Home' ? (
          <>
            <Appbar.BackAction
              onPress={() => props.navigation.navigate('Home')}
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
          icon='map-marker'
          onPress={() =>
            props.navigation.navigate('Places')
          }
        />
      </Appbar.Header>
    </View>
  );
}
