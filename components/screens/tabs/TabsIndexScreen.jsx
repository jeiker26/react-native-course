import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './home/HomeScreen';
import CartScreen from './cart/CartScreen';
import ProductListDrawerScreen from './list/ProductListDrawerScreen';
import {useRecoilValue} from 'recoil';
import {cartState} from '../../state/cart';

const Tab = createBottomTabNavigator();

const TabsIndexScreen = () => {
  const cartItems = useRecoilValue(cartState);
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="ShopNavigator"
        component={ProductListDrawerScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={'Cart (' + cartItems.length + ')'}
        component={CartScreen}
      />
    </Tab.Navigator>
  );
};

export default TabsIndexScreen;
