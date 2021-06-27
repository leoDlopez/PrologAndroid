import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10
    }
})

function Movies() {
    return (
        <View style={styles.body}>
            <Text style={styles.text}>Aqui van las peliculas we xd</Text>
        </View>
    )
}

export default Movies;