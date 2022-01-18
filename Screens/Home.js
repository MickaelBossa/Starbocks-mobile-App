// Librairies
import React, { useState } from 'react';
import Colors from '../constants/Color';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
  ActivityIndicator,
  Linking,
  Dimensions,
  SafeAreaView,
  Platform,
} from 'react-native';

// Composants
import Logo from '../Components/UI/Logo/Logo';
import Product from '../Components/Product/Product';
import Header from '../Components/UI/Header/Header';

export default function Home(props) {
  // State
  const [isDisplayed, setIsDisplayed] = useState(false);

  const [products, setProducts] = useState([
    {
      name: 'Iced Latte',
    },
    {
      name: 'Doubleshot Iced Coffee',
    },
    {
      name: 'Doubleshot Vanilla Iced Coffee',
    },
    {
      name: 'Caramel Macchiato',
    },
    {
      name: 'Iced Caramel Macchiato',
    },
    {
      name: 'Iced Cappuccino',
    },
    {
      name: 'Ristretto Bianco',
    },
    {
      name: 'Cold Brew Latte',
    },
    {
      name: 'Mocha',
    },
    {
      name: 'Iced Mocha',
    },
    {
      name: 'Americano',
    },
    {
      name: 'Iced Americano',
    },
    {
      name: 'Café Filtre',
    },
    {
      name: 'Café Filtre Glacé',
    },
    {
      name: 'Chocolat Viennois Signature',
    },
    {
      name: 'Chocolat Viennois Signature Glacé',
    },
  ]);

  const [modal, setModal] = useState(false);

  // Fonctions
  const toggleState = () => {
    setIsDisplayed(!isDisplayed);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.secondary }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Header navigation={props.navigation} screen='Home' />
        <View style={styles.container}>
          <Modal visible={modal} transparent={true}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={{ color: Colors.secondary, fontSize: 15 }}>
                  La page de ce produit n'est pas encore disponible
                </Text>
                <Text style={styles.closeBtn} onPress={toggleModal}>
                  Fermer
                </Text>
              </View>
            </View>
          </Modal>

          <Logo navigation={props.navigation} />

          <Text style={{ paddingBottom: 50 }}>
            {isDisplayed
              ? 'Que voulez vous boire'
              : 'Commencez par ouvrir le menu'}
          </Text>

          {isDisplayed && (
            <FlatList
              style={{ width: '100%' }}
              keyExtractor={(item) => Math.random().toString()}
              data={products}
              renderItem={(item) => (
                <Product item={item} toggleModal={toggleModal} />
              )}
            />
          )}
          <TouchableOpacity
            onPress={toggleState}
            style={styles.button}
            activeOpacity={0.7}
          >
            <Text style={{ color: Colors.secondary }}>
              {isDisplayed ? 'Cacher le menu' : 'Afficher le menu'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://starbucks.fr')}
            style={{ paddingTop: 7 }}
          >
            <Text>En savoir plus</Text>
          </TouchableOpacity>
          <Text>
            (Version{' '}
            <Text style={{ fontWeight: 'bold' }}>
              {Platform.OS === 'ios' ? 'Iphone' : 'Android'}
            </Text>
            )
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
    paddingBottom: 10,
  },
  button: {
    backgroundColor: Colors.primary,
    width: '40%',
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, .5)',
  },
  modalContent: {
    width: '60%',
    height: '15%',
    backgroundColor: '#241E00',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeBtn: {
    color: '#217BEB',
    fontSize: 17,
    borderTopWidth: 1,
    borderColor: '#fff',
    width: '100%',
    textAlign: 'center',
    marginTop: 30,
    paddingTop: 5,
  },
});
