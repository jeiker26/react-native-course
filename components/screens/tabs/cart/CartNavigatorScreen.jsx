import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CartScreen from './CartScreen';
import PaymentScreen from './PaymentScreen';

const Stack = createStackNavigator();

const CartNavigatorScreen = () => {
  return (
    <Stack.Navigator initialRouteName="CartScreen">
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Payment" component={PaymentScreen} />
    </Stack.Navigator>
  );
};

export default CartNavigatorScreen;
