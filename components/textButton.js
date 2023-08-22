import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View } from 'react-native'

export default function TextButton() {
    return (
        <TouchableOpacity>
            <View>
            <Text style={styles.button}>Register</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        color: '#1877F2',
        fontSize: 15,
        marginLeft: 20,
        marginTop: 10,
    }
})