import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FiltersScreen from './subscreen/FiltersScreen';
import ListIndexScreen from './subscreen/ListIndexScreen';

const Stack = createStackNavigator();
const ProductListDrawerScreen = () => {
  return (
    <Stack.Navigator initialRouteName="ProductsList">
      <Stack.Screen
        name="ProductsList"
        component={ListIndexScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Filters"
        component={FiltersScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ProductListDrawerScreen;
