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

function Users() {
    return (
        <View style={styles.body}>
            <Text style={styles.text}>Esta es la pantalla de usuarios xd</Text>
        </View>
    )
}

export default Users;