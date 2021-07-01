import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#101010'
    },
    text: {
        fontSize: 25,
        fontWeight: '700',
        fontStyle: 'italic',
        margin: 0,
        fontFamily: 'Verdana',
        color: '#C59227'
    }
})

function Home() {
    return (
        <View style={styles.body}>
            <Image
                source={require('../assets/cineponys2.png')}
                style={{ width: 300, height: 142 }}
            />
            <Text style={styles.text}>La capital del Pony</Text>
        </View>
    )
}

export default Home;
