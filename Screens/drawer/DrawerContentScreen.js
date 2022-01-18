// Librairies
import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import {
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

export default function DrawerContentScreen(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
          <View style={{alignItems: 'center'}}>
            <Image
            source={{
                uri: 'https://believemy.com/uploads/6435acae7f1901acb1e4355395964ea5_ea186b839326aea1816bd1f3f2ab84b3.png',
            }}
            style={styles.logoStyle}
            />
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  logoStyle: {
    width: 77,
    height: 77,
    marginBottom: 15,
  },
});
