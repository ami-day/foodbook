import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View } from 'react-native'

export default function SubmitButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Submit</Text>
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