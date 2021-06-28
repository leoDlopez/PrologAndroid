import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const URI = 'http://192.168.100.27:8000';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#101010'
    },
    text: {
        fontSize: 40,
        fontWeight: '700',
        margin: 30,
        color: '#C59227',
        textAlign: 'center'
    },
    text2: {
        fontSize: 15,
        fontWeight: '400',
        margin: 0,
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
    picker: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        width: 300,
        borderColor: '#C59227',
        color: '#C59227',
        borderStyle: "solid",
    }
})

function Recomendacion() {
    const [values, setValues] = useState({
        name: null,
        users: null,
        porcentaje: '',
        peliculas: null,
    })

    function handleChangeName(value) {
        setValues(values => ({
            ...values,
            name: value,
        }))
    }

    async function getUsers() {
        try {
            let response = await
                fetch(URI + '/api/usuarios');
            let json = await response.json();

            setValues(values => ({
                ...values,
                users: json,
            }))
        } catch (error) {
            console.error(error);
        }
    }

    function handleChangePorcentaje(value) {
        setValues(values => ({
            ...values,
            porcentaje: value,
        }))
    }

    async function submit() {
        try {
            let response = await
                fetch(URI + '/api/consulta', {
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
            setValues(values => ({
                ...values,
                peliculas: JSON.parse(json.peliculas),
            }))
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUsers()
    }, []);

    return (
        <View style={styles.body}>
            <Text style={styles.text}>Recomendaciones</Text>
            <Text style={styles.text2}>Selecciona tu usuario:</Text>
            <Picker
                selectedValue={values.name}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => handleChangeName(itemValue)}
            >
                {values.users && values.users.length && values.users.map((usuario, index) => (
                    <Picker.Item label={usuario.name} value={usuario.name} key={index} />
                ))}
            </Picker>
            <TextInput
                style={styles.input}
                title="hola"
                onChangeText={text => handleChangePorcentaje(text)}
                value={values.porcentaje}
                placeholder="Introduce el porcentaje de matching deseado"
                placeholderTextColor="#C59227"
                keyboardType="numeric"
            />
            <Button
                onPress={submit}
                title="Consultar"
                color="#7a1f24"
                accessibilityLabel="Registrate en Cineponys"
            />
        </View>
    )
}

export default Recomendacion;
