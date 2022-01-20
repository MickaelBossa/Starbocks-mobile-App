// Librairies
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Colors from '../../constants/Color';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import * as placesActions from '../../store/actions/places';

export default function Place(props) {

    // Variables
    const dispatch = useDispatch();

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => dispatch(placesActions.deleteStore(props.item.id))} >
      <View style={styles.container}>
        <ImageBackground source={props.item.store} style={styles.background}>
          <View style={styles.informations}>
            <Text style={styles.location}>{props.item.location}</Text>
            <Text style={styles.country}>{props.item.country}</Text>
          </View>
        </ImageBackground>
        <View style={styles.contact}>
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${props.item.phoneNumber}`)}
          >
            <Text style={styles.phone}>{props.item.phoneNumber}</Text>
          </TouchableOpacity>
          <Ionicons name='call' size={15} color={Colors.primary} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 15,
    minWidth: '95%',
    overflow: 'hidden',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
  },
  location: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 17,
  },
  country: {
    fontStyle: 'italic',
    color: '#fff',
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'flex-end',
  },
  phone: {
    marginRight: 10,
    color: Colors.primary,
  },
  background: {
    width: '100%',
    height: 170,
  },
  informations: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 15,
    backgroundColor: 'rgba(0, 0, 0, .4)',
  },
});
