// Librairies
import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';

// Composants
import Header from '../Components/UI/Header/Header';
import Place from '../Components/Place/Place';

export default function Places(props) {
  // Variables
  const places = useSelector((state) => state.places.places);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header navigation={props.navigation} screen='Places' />
      <View style={styles.container}>
        <FlatList
          data={places}
          renderItem={(item) => (
            <Place item={item.item} />
          )}
          keyExtractor={item => item.id}
        />
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
