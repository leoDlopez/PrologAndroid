import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';

const URI = 'http://192.168.100.27:8000';

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

function Recomendacion() {
    const [values, setValues] = useState({
        name: '',
        users: '',
    })

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

    useEffect(() => {
        getUsers()
    }, []);
    return (
        <View style={styles.body}>
            <Text style={styles.text}>Esta es la pantalla de recomendacion alv</Text>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
        </View>
    )
}

export default Recomendacion;
