import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native';
import SearchBar from '../products/SearchBar';

const ShopScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Shop</Text>
            <SearchBar />
            <Button
                title="Ver carrito"
                onPress={() => navigation.navigate('Cart')}
            />
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

export default ShopScreen;
