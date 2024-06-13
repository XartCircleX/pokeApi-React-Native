import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function Details({ navigation, route }) {
    const { pokemon } = route.params;

    function handleClick() {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Name: {pokemon.name}</Text>
            <Text style={styles.text}>Height: {pokemon.height}</Text>
            <Text style={styles.text}>Weight: {pokemon.weight}</Text>
            <Text style={styles.text}>Base Experience: {pokemon.base_experience}</Text>
            <TouchableOpacity onPress={handleClick}>
                <Text style={styles.link}>Back to Home</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
    link: {
        fontSize: 18,
        color: 'blue',
    }
});
