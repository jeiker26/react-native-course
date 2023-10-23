import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './tabs/home/HomeScreen';
import CartScreen from './tabs/cart/CartScreen';
import ProductListDrawerScreen from './tabs/list/ProductListDrawerScreen';
import {useRecoilValue} from 'recoil';
import {cartState} from '../state/cart';
import ProfileNavigatorScreen from './tabs/profile/ProfileNavigatorScreen';

const Tab = createBottomTabNavigator();

const TabsIndexScreen = () => {
  const cartItems = useRecoilValue(cartState);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Shop"
        component={ProductListDrawerScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={
          'Cart (' +
          cartItems.reduce(
            (total, product) => total + (product?.units || 0),
            0,
          ) +
          ')'
        }
        component={CartScreen}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigatorScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default TabsIndexScreen;
