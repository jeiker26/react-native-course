import React from 'react';
import ProductListScreen from './ProductListScreen';
import ProductDetailScreen from './ProductDetailScreen';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
const ListIndexScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Shop" component={ProductListScreen} />
      <Stack.Screen name="Product" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};

export default ListIndexScreen;
