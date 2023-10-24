import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../../../assets/img/background.jpg')}
        style={styles.coverImage}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.storeName}>Geshop</Text>
        <Text style={styles.storeDescription}>
          Bienvenido a nuestra tienda de camisetas "Frikkies". Ofrecemos una
          amplia gama de camisetas temáticas para todos los entusiastas de la
          cultura friki.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  coverImage: {
    width: '100%',
    height: 200,
  },
  contentContainer: {
    padding: 16,
  },
  storeName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  storeDescription: {
    fontSize: 16,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default HomeScreen;
