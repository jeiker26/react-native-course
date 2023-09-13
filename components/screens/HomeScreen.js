import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import camiseta from '../../assets/img/tshirt.png';
import TShirt from '../products/TShirt';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <TShirt name={'Camiseta'} description={'Camiseta blanca'} price={10} image={camiseta} />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    }
});

export default HomeScreen;
