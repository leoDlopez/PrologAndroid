import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';

const URI = 'http://192.168.100.27:8000';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#101010'
    },
    text: {
        fontSize: 45,
        fontWeight: '700',
        margin: 30,
        color: '#C59227',
        textAlign: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        width: 300,
        borderColor: '#C59227',
        color: '#C59227',
    },
    input2: {
        height: 80,
        margin: 12,
        borderWidth: 1,
        width: 300,
        borderColor: '#C59227',
        color: '#C59227',
    },
})

function Movies() {
    const [values, setValues] = useState({
        name: '',
        cadenaGeneros: '',
        cadenaValores: '',
    })

    function handleChangeName(value) {
        setValues(values => ({
            ...values,
            name: value,
        }))
    }

    function handleChangeGeneros(value) {
        setValues(values => ({
            ...values,
            cadenaGeneros: value,
        }))
    }

    function handleChangeValores(value) {
        setValues(values => ({
            ...values,
            cadenaValores: value,
        }))
    }

    async function submit() {
        try {
            let response = await
                fetch(URI + '/api/pelicula', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values)
                });
            console.log(await response);
            let json = await response.json();
            console.log(json);
            Alert.alert(json.message);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>Registrar pelicula</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => handleChangeName(text)}
                value={values.name}
                placeholder="Introduce el nombre de la pelicula"
                placeholderTextColor="#C59227"
            />
            <TextInput
                style={styles.input2}
                onChangeText={text => handleChangeGeneros(text)}
                value={values.cadenaGeneros}
                placeholder="Introduc los géneros de la pelicula (separados por una coma)"
                placeholderTextColor="#C59227"
                multiline={true}
            />
            <TextInput
                style={styles.input2}
                title="hola"
                onChangeText={text => handleChangeValores(text)}
                value={values.cadenaValores}
                placeholder="Introduce los valores de la pelicula (separados por una coma)"
                placeholderTextColor="#C59227"
                multiline={true}

            />
            <Button
                onPress={submit}
                title="Guardar"
                color="#7a1f24"
                accessibilityLabel="Registrate en Cineponys"
            />
        </View>
    )
}

export default Movies;