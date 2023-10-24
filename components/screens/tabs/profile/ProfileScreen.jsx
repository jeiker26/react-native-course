import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Button, Switch, TextInput, Alert } from "react-native";
import {useRecoilState} from 'recoil';
import {authState} from '../../../state/auth';

const ProfileScreen = ({navigation}) => {
  const [user, setUser] = useRecoilState(authState);

  const handleLogout = () =>
    setUser({
      userId: null,
      isLoggedIn: false,
      turorial: 'basic',
    });

  useEffect(() => {
    let inactivityTimer;

    const handleUserActivity = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        handleLogout();
      }, 300000);
    };

    handleUserActivity();

    return () => {
      clearTimeout(inactivityTimer);
    };
  }, []);

  // const selectImage = () => {
  //   ImagePicker.showImagePicker({}, response => {
  //     if (!response.didCancel && !response.error) {
  //       setUser({...user, profileImage: response.uri});
  //     }
  //   });
  // };

  const saveProfile = () => {
    Alert.alert('Perfil guradado con existo!');
    // Implementa la lógica de guardar el perfil aquí
  };

  return (
    <View style={styles.container}>
      <View style={styles.userFormContainer}>
        <Text style={styles.title}>Bienvenido {user.userId}</Text>

        {/*{user.profileImage && (*/}
        {/*  <Image*/}
        {/*    source={{uri: user.profileImage}}*/}
        {/*    style={styles.profileImage}*/}
        {/*  />*/}
        {/*)}*/}
        {/*<Button title="Seleccionar Foto" onPress={selectImage} />*/}
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          value={user.name}
          onChangeText={text => setUser({...user, name: text})}
          style={styles.input}
        />
        <Text style={styles.label}>Email:</Text>
        <TextInput
          value={user.email}
          onChangeText={text => setUser({...user, email: text})}
          style={styles.input}
        />
        <Button title="Guardar Perfil" onPress={saveProfile} />
      </View>

      <View style={styles.bottonContainer}>
        <View style={styles.tutorialContainer}>
          <Text>¿Eres un usuario avanzado?</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={user.tutorial === 'basic' ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() =>
              setUser({
                ...user,
                tutorial: user.tutorial === 'basic' ? 'advanced' : 'basic',
              })
            }
            value={user.tutorial !== 'basic'}
          />
        </View>

        <View style={styles.buttonsContainer}>
          <Button
            title="Ver tutorial"
            style={styles.tutorialButton}
            onPress={() => navigation.navigate('TutorialScreen')}
          />

          <Button
            title="Logout"
            color={'red'}
            onPress={handleLogout}
            style={styles.logoutButton}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  tutorialContainer: {
    position: 'fixed',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#333',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  label: {
    color: 'white',
  },
  input: {
    width: '100%',
    minWidth: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'white',
    backgroundColor: '#444',
    color: 'white',
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  bottonContainer: {},
  logoutButton: {
    backgroundColor: 'red',
    width: '100%',
  },
  tutorialButton: {
    width: '100%',
  },
});

export default ProfileScreen;
