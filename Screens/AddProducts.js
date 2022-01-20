// Librairies
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Platform,
  TouchableOpacity,
  Keyboard,
  Alert,
} from 'react-native';
import Colors from '../constants/Color';
import { useDispatch } from 'react-redux';
import * as productsActions from '../store/actions/products';

// Composants
import Header from '../Components/UI/Header/Header';

export default function AddProducts(props) {
  // State
  const [productName, setProductName] = useState('');

  // Variable
  const dispatch = useDispatch();

  // Fonctions
  const onSubmitPressedHandler = () => {
    // Fermer le clavier
    Keyboard.dismiss();
    dispatch(productsActions.addProduct(productName));

    // Afficher une alerte
    Alert.alert(
      'Merci !',
      `Votre proposition a été acceptée avec succès "${productName}"`,
    );

    // Vider le champ de formulaire
    setProductName('');
  };

  return (
    <View style={{ flex: 1 }}>
      <Header navigation={props.navigation} screen='AddProducts' />
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.label}>Nom du produit :</Text>
          <TextInput
            style={styles.input}
            placeholder='Tapez quelque chose'
            placeholderTextColor={Colors.primary}
            autoCapitalize='words'
            value={productName}
            onChangeText={setProductName}
          />
          <TouchableOpacity
            style={styles.submit}
            activeOpacity={0.8}
            onPress={onSubmitPressedHandler}
          >
            <Text style={styles.submitText}>Ajouter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: Colors.primary,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  form: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: Dimensions.get('window').width * 0.8,
    elevation: 1,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 50,
  },
  input: {
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === 'ios' ? 10 : 5,
    backgroundColor: '#ecf0f1',
    marginTop: 10,
  },
  submit: {
    backgroundColor: Colors.primary,
    padding: 7,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: 15,
  },
  submitText: {
    color: 'white',
  },
});
