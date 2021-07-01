import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Carousel from "pinar";

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
    text3: {
        fontSize: 15,
        fontWeight: '400',
        margin: 20,
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

const styles2 = {
    slide1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#a3c9a8"
    },
    slide2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#84b59f"
    },
    slide3: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#69a297"
    },
    text: {
        color: "#1f2d3d",
        opacity: 0.7,
        fontSize: 28,
        fontWeight: "bold"
    }
};

function Recomendacion() {
    const [values, setValues] = useState({
        name: null,
        users: null,
        porcentaje: '',
        peliculas: [],
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

    function random() {
        var estilo = {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16)
        }
        console.log(estilo);
        return estilo
    }

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
            {values.peliculas && values.peliculas.length > 0 ?
                <Carousel style={{ margin: 10 }}>
                    {values.peliculas.map((peli, index) => (
                        <View style={random()} key={index}>
                            <Text style={styles2.text}>{peli.pelicula}</Text>
                            <Text style={styles2.text}>%Genero= {parseInt(peli.porcentaje_genero).toFixed(2)}</Text>
                            <Text style={styles2.text}>%Valores={parseInt(peli.porcentaje_valores).toFixed(2)}</Text>
                            <Text style={styles2.text}>%Cine={parseInt(peli.porcentaje_cine).toFixed(2)}</Text>
                        </View>
                    ))}
                </Carousel>
                :
                <Text style={styles.text3}> No hay resultados, lo siento :(</Text>
            }

        </View>
    )
}

export default Recomendacion;
