import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View } from 'react-native'

export default function FlatButton({disabled, onPress}) {
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Log In</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#1877F2',
        width: 100,
        marginTop: 20,
        marginLeft: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    }
})