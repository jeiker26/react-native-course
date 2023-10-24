import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './tabs/home/HomeScreen';
import CartScreen from './tabs/cart/CartScreen';
import ProductListDrawerScreen from './tabs/list/ProductListDrawerScreen';
import {useRecoilValue} from 'recoil';
import {cartState} from '../state/cart';
import ProfileNavigatorScreen from './tabs/profile/ProfileNavigatorScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {authState} from '../state/auth';

const Tab = createBottomTabNavigator();

const TabsIndexScreen = () => {
  const cartItems = useRecoilValue(cartState);
  const user = useRecoilValue(authState);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          height: 50,
          paddingHorizontal: 5,
          paddingBottom: 5,
          backgroundColor: 'rgba(34,36,40,1)',
          position: 'absolute',
          borderTopWidth: 0,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Profile' || route.name === 'Login') {
            iconName = focused ? 'bug' : 'bug-outline';
          } else if (route.name === 'Shop') {
            iconName = focused ? 'bag' : 'bag-outline';
          } else if (route.name === 'Home') {
            iconName = focused ? 'game-controller' : 'game-controller-outline';
          } else if (route.name.includes('Cart')) {
            iconName = focused ? 'basket' : 'basket-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Shop" component={ProductListDrawerScreen} />
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
        name={user?.id ? 'Profile' : 'Login'}
        component={ProfileNavigatorScreen}
      />
    </Tab.Navigator>
  );
};

export default TabsIndexScreen;
