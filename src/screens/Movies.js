import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, Image, TouchableOpacity } from 'react-native';

const URI = 'http://192.168.100.27:8000';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#101010',
        paddingBottom: 25
    },
    text: {
        fontSize: 25,
        fontWeight: '700',
        margin: 30,
        color: '#C59227',
        textAlign: 'center'
    },
    text2: {
        fontSize: 25,
        fontWeight: '500',
        margin: 0,
        color: '#C59227'
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
    button: {
        backgroundColor: 'transparent',
        borderRadius: 20,
        padding: 10,
        marginTop: 20,
        marginBottom: 20,
        shadowColor: '#303838',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
        height: 80,
        width: 150,
        borderColor: "#7A1F24",
        borderWidth: 1,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonPressed: {
        backgroundColor: '#7A1F24',
        borderRadius: 20,
        padding: 10,
        marginTop: 20,
        marginBottom: 20,
        shadowColor: '#303838',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
        height: 80,
        width: 150,
        borderColor: "#7A1F24",
        borderWidth: 1,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

function Movies() {
    const [values, setValues] = useState({
        name: '',
        cadenaGeneros: '',
        cadenaValores: '',
        cinepony: false,
        cinepolis: false,
        cinemex: false,
        cinedot: false,
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

    function handleCinepony() {
        setValues(values => ({
            ...values,
            cinepony: !values.cinepony,
        }))
    }

    function handleCinepolis() {
        setValues(values => ({
            ...values,
            cinepolis: !values.cinepolis,
        }))
    }

    function handleCinemex() {
        setValues(values => ({
            ...values,
            cinemex: !values.cinemex,
        }))
    }

    function handleCinedot() {
        setValues(values => ({
            ...values,
            cinedot: !values.cinedot,
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
            <Text style={styles.text2}>Elige tus cines favoritos!</Text>
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: "wrap", justifyContent: "center" }}>
                <TouchableOpacity style={!values.cinepony ? styles.button : styles.buttonPressed} onPress={handleCinepony}>
                    <Image source={require("../assets/cponys2.png")} style={{ width: 100.2, height: 70, marginLeft: 0, marginTop: 0 }} />
                </TouchableOpacity>
                <TouchableOpacity style={!values.cinepolis ? styles.button : styles.buttonPressed} onPress={handleCinepolis}>
                    <Image source={require("../assets/cinepolis.png")} style={{ width: 70, height: 70, marginLeft: 0, marginTop: 0 }} />
                </TouchableOpacity>
                <TouchableOpacity style={!values.cinemex ? styles.button : styles.buttonPressed} onPress={handleCinemex}>
                    <Image source={require("../assets/cinemex.png")} style={{ width: 140, height: 40, marginLeft: 0, marginTop: 0 }} />
                </TouchableOpacity>
                <TouchableOpacity style={!values.cinedot ? styles.button : styles.buttonPressed} onPress={handleCinedot}>
                    <Image source={require("../assets/cinedot.jpg")} style={{ width: 70, height: 70, marginLeft: 0, marginTop: 0, borderRadius: 50 }} />
                </TouchableOpacity>
            </View>
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