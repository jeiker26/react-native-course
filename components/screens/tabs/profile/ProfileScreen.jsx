import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button, Switch} from 'react-native';
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido {user.userId}</Text>

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

      <Button
        title="Ver tutorial"
        onPress={() => navigation.navigate('TutorialScreen')}
      />

      <Button title="Logout" color={'red'} onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  container: {
    flex: 1,
    padding: 16,
    alignContent: 'space-between',
  },
  tutorialContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default ProfileScreen;
