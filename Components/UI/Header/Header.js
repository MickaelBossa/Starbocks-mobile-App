// Librairies
import * as React from 'react';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function Header(props) {
  const manageScreens = () => {
    if (props.screen && props.screen === 'Home') {
      return 'Accueil';
    } else if (props.screen && props.screen === 'Places') {
      return 'Places';
    }
  };

  return (
    <View>
      <Appbar.Header style={{ backgroundColor: '#006341' }}>
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
            props.navigation.navigate('Places', { secretPath: false })
          }
        />
      </Appbar.Header>
    </View>
  );
}
