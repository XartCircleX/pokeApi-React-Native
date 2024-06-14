import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export function Details({ navigation, route }) {
    const { pokemon } = route.params;

    function handleClick() {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
            <Image
                source={{ uri: pokemon.sprites.front_default }}
                style={styles.sprite}
            />
            <Text style={styles.text}>Name: {pokemon.name}</Text>
            <Text style={styles.text}>Height: {pokemon.height}</Text>
            <Text style={styles.text}>Weight: {pokemon.weight}</Text>
            <Text style={styles.text}>Base Experience: {pokemon.base_experience}</Text>
            </View>
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
        backgroundColor: "gray",
    },
    card: {
        padding: 35,
        alignItems: "center",
        borderRadius: 15,
        backgroundColor: "yellow",
        borderWidth: 5,
        borderStyle: "dotted",
        borderColor: "red"
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
        color: "red",
        fontFamily: "arial"

    },
    link: {
        fontSize: 18,
        color: 'blue',
    },
    sprite: {
        width: 200,
        height: 200,
        bottom: 10,
        backgroundColor: "orange",
        borderRadius: 30,
        borderColor: "red",
        borderStyle: "solid",
        borderWidth: 5,

    },
});
