// Librairies
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

// Composants
import Header from '../Components/UI/Header/Header';

export default function Places(props) {
  console.log(props);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={props.navigation} screen="Places" />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <Text>
            {props.route.params.secretPath
              ? "Bravo vous avez découvert l'easter egg !"
              : 'Test'}{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
    paddingBottom: 10,
  },
});
