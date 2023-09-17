import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from "react";


export default function Restaurant({placeId, placeName, placePhotoUrl, navigation}) {

  function onPress() {
    navigation.navigate('Details Page', {
      placeId: placeId
    })
  };

    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.gridItem}>
            <Text>{placeName}</Text>
            <Image source={{uri: placePhotoUrl }} style={styles.gridImage}/>
        </View>
        </TouchableOpacity>
      );
    }

    const styles = StyleSheet.create({
      gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        width: 150,
        borderRadius: 8,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6EEF7'
      },
      gridImage: {
        width: 100,
        height: 100,

      }
    })