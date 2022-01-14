import React from 'react';
import { Text, Image, View, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';

export default function Logo(props) {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={{
          uri: 'https://believemy.com/uploads/6435acae7f1901acb1e4355395964ea5_ea186b839326aea1816bd1f3f2ab84b3.png',
        }}
        style={styles.logo}
      />
      <TouchableWithoutFeedback onPress={() => props.navigation.navigate('Places', {secretPath: true})} >
        <Text style={styles.title}>Starbucks</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: '#006341',
    textTransform: 'uppercase',
    fontFamily: 'Montserrat-Black',
  },
  logo: {
    width: Dimensions.get('window').width * 0.25,
    height: Dimensions.get('window').width * 0.25,
    marginBottom: Dimensions.get('window').width * 0.03,
  },
});
