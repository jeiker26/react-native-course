import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {RecoilRoot} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';
import {PermissionsAndroid, Text} from 'react-native';
import Share from 'react-native-share';
import * as Contacts from 'react-native-contacts';

export default function App() {
  function compartirTexto(texto) {
    const shareOptions = {
      message: texto,
    };

    Share.open(shareOptions)
      .then(() => console.log('Texto compartido con éxito'))
      .catch(error => console.log('Error al compartir texto:', error));
  }

  function compartirImagen(rutaImagen) {
    const shareOptions = {
      url: `file://${rutaImagen}`,
      type: 'image/jpeg',
    };

    Share.open(shareOptions)
      .then(() => console.log('Imagen compartida con éxito'))
      .catch(error => console.log('Error al compartir imagen:', error));
  }

  const obtenerContactos = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    })
      .then(res => {
        console.log('Permission: ', res);
        Contacts.getAll()
          .then(contacts => {
            // work with contacts
            console.log(contacts);
          })
          .catch(e => {
            console.log(e);
          });
      })
      .catch(error => {
        console.error('Permission error: ', error);
      });
  };

  obtenerContactos();
  useEffect(() => {
    //compartirTexto('¡Hola! Estoy compartiendo este texto desde mi aplicación.');
    //const rutaImagenCompartir = './example.png';
    //compartirImagen(rutaImagenCompartir);
    console.log([
      {
        company: '',
        contactType: 'person',
        firstName: 'Test',
        id: '177C371E-701D-42F8-A03B-C61CA31627F6',
        imageAvailable: false,
        jobTitle: '',
        lastName: '',
        name: 'Test',
        phoneNumbers: [
          {
            countryCode: 'es',
            digits: '633333333',
            id: 'EF48385D-28C2-48DE-AAB3-A81BC5F16981',
            label: 'mobile',
            number: '(34) 633333333',
          },
        ],
      },
    ]);
  }, []);

  return (
    <RecoilRoot>
      <NavigationContainer>
        <Text>Hello</Text>
      </NavigationContainer>
    </RecoilRoot>
  );
}
