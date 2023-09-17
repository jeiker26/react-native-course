import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const InputButtonScreen = () => {
  const [text, setText] = useState('');

  const handleButtonClick = () => {
    Alert.alert('Mensaje', `Texto ingresado: ${text}`);
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        placeholder="Ingrese su texto aquí"
        onChangeText={(inputText) => setText(inputText)}
        value={text}
        style={{ borderBottomWidth: 1, marginBottom: 16 }}
      />
      <Button title="Mostrar mensaje" onPress={handleButtonClick} />
    </View>
  );
};

export default InputButtonScreen;
