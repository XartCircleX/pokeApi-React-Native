import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function Card({ data, navigation }) {
    function handleClick() {
        navigation.navigate("Details", { pokemon: data });
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handleClick}>
            <Text style={styles.text}>{data.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "orange",
        padding: 10,
        margin: 5,
    },
    text: {
        color: "white",
    }
});

