import React from 'react';
import {View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FiltersScreen from './subscreen/FiltersScreen';
import ListIndexScreen from './subscreen/ListIndexScreen';

const Drawer = createDrawerNavigator();
const ProductListDrawerScreen = () => {
  return (
    <Drawer.Navigator initialRouteName="ProductsList">
      <Drawer.Screen name="ProductsList" component={ListIndexScreen} />
      <Drawer.Screen name="Filters" component={FiltersScreen} />
    </Drawer.Navigator>
  );
};

export default ProductListDrawerScreen;
