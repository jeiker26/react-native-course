import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './home/HomeScreen';
import CartScreen from './cart/CartScreen';
import ListIndexScreen from './list/ListIndexScreen';

const Tab = createBottomTabNavigator();

const TabsIndexScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="ShopNavigator"
        component={ListIndexScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
};

export default TabsIndexScreen;
