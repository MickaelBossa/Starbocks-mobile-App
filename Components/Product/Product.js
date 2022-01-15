// Librairies
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import Colors from '../../Constants/Color';

export default function Product(props) {


  return (
    <TouchableHighlight
      onPress={props.toggleModal}
      activeOpacity={1}
      underlayColor={Colors.primaryFaded}
    >
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{props.item.item.name}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: Dimensions.get('window').width < 400 ? 30 : 20,
    borderBottomWidth: 1,
    borderColor: '#182e28',
  },
});
