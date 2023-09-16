import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
// rimport CartCounter from '../products/CartCounter';
// <CartCounter cartItems={3}/>
import SearchBar from '../products/SearchBar';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Shop</Text>
            <SearchBar />
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
