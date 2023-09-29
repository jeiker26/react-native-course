import React from 'react';
import {StyleSheet, View} from 'react-native';
import ProductListScreen from './ProductListScreen';
import ProductDetailScreen from './ProductDetailScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const ListIndexScreen = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductList"
          component={ProductListScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Product" component={ProductDetailScreen} />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListIndexScreen;
