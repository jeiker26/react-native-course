import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';
import {useSetRecoilState} from 'recoil';
import {authState} from '../../../state/auth';

function LoginScreen() {
  const setAuthState = useSetRecoilState(authState);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (password === 'admin') {
      setAuthState({userId: username, isLoggedIn: true});
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
