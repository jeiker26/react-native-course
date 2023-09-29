import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

function LoginScreen({setIsAuthenticated}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      setIsAuthenticated(true);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

export default LoginScreen;
