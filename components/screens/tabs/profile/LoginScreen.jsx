import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useSetRecoilState} from 'recoil';
import {authState} from '../../../state/auth';

const LoginScreen = () => {
  const setAuthState = useSetRecoilState(authState);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (password === 'admin') {
      setAuthState({userId: username, isLoggedIn: true});
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../../assets/img/logo.png')}
          style={styles.logo}
        />
      </View>
      <TextInput
        placeholder="Usuario"
        style={styles.input}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry={true}
        style={styles.input}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={styles.primaryButton} onPress={handleLogin}>
        <Text style={styles.primaryButtonText}>Iniciar sesión</Text>
      </TouchableOpacity>
      {/*<TouchableOpacity style={styles.secondaryButton}>*/}
      {/*  <Text style={styles.secondaryButtonText}>Registrarse</Text>*/}
      {/*</TouchableOpacity>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000FF', // Azul Jedi
  },
  logoContainer: {
    width: '100%',
    height: '50%', // Ajusta el tamaño a tu necesidad
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#0000FF',
    borderRadius: 5,
    backgroundColor: 'white',
    margin: 10,
    paddingLeft: 10,
  },
  primaryButton: {
    backgroundColor: '#0000FF',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  secondaryButton: {
    backgroundColor: 'white',
    color: '#0000FF',
    borderColor: '#0000FF',
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 16,
  },
  secondaryButtonText: {
    color: '#0000FF',
    fontSize: 16,
  },
});

export default LoginScreen;
