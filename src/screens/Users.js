import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

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
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        width: 200
    },
})

function Users() {
    const [values, setValues] = useState({
        name: '',
    })

    function handleChangeName(value) {
        setValues(values => ({
            ...values,
            name: value,
        }))
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>Esta es la pantalla de usuarios xd</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => handleChangeName(text)}
                value={values.name}
                placeholder="Introduce tu nombre"
            />
        </View>
    )
}

export default Users;