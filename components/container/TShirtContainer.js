import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import camiseta from '../../assets/img/tshirt.png';
import TShirt from '../products/TShirt';

const TShirtContainer = () => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <TShirt name={'Camiseta'} description={'Camiseta blanca'} price={10} image={camiseta} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    }
});

export default TShirtContainer;
