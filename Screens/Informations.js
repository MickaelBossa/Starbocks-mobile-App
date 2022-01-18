// Librairies
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Linking,
} from 'react-native';
import Colors from '../constants/Color';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Informations(props) {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Service aux consommateurs</Text>

        <View style={styles.contact}>
            <Ionicons name='call' size={23} color={Colors.primary} />
            <Text style={styles.information}>06.00.00.00.00</Text>
        </View>
        <TouchableWithoutFeedback onPress={() => {Linking.openURL('mailto:John.doe@example.com')}} >
            <View style={styles.contact}>
                <Ionicons name='mail' size={23} color={Colors.primary} />
                <Text style={styles.information}>John.doe@example.com</Text>
            </View>
        </TouchableWithoutFeedback>

        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <View style={styles.btn}>
            <Ionicons name='close' size={23} color='white' />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 17,
    textTransform: 'uppercase',
    color: Colors.primary,
    fontWeight: 'bold',
    marginBottom: 27,
  },
  btn: {
    backgroundColor: Colors.primary,
    borderRadius: 15,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  contact: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
  },
  information: {
      marginLeft: 7,
      fontSize: 17,
  }
});
