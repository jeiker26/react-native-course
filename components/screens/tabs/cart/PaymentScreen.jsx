import React from 'react';
import {View, Text} from 'react-native';
import {useRecoilState, useRecoilValue} from 'recoil';
import {authState} from '../../../state/auth';
import {cartState} from '../../../state/cart';

export default function PaymentScreen() {
  const [productsInCart] = useRecoilState(cartState);
  const user = useRecoilValue(authState);
  const calculateTotal = () => {
    return productsInCart.reduce(
      (total, product) => total + product.price * product.units,
      0,
    );
  };

  const calculateTotalItems = () => {
    return productsInCart.reduce(
      (total, product) => total + (product?.units || 0),
      0,
    );
  };

  return (
    <View>
      <Text>Pasarela de pago</Text>
      <Text>Nombre del cliente: {user?.name}</Text>
      <Text>Email: {user?.email}</Text>
      <Text>Número de productos: {calculateTotalItems()}</Text>
      <Text>Total: {calculateTotal()}€</Text>
    </View>
  );
}
