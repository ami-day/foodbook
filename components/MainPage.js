import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useState } from "react";
import * as Location from "expo-location";

export default function MainPage({ navigation }) {

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const setCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
  
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }
  
    let location = await Location.getCurrentPositionAsync({});
    setLatitude(location.coords.latitude);
    setLongitude(location.coords.longitude);
  };

  function onPressHandler() {
    navigation.navigate('Restaurants Page', {
      latitude: latitude,
      longitude: longitude
    });
  }

  return (
    <View style={styles.container}>
      <Button title="Get Location" onPress={setCurrentLocation}/>
      <Text>latitude = {latitude}</Text>
      <Text>longitude = {longitude}</Text>
      <Button title="Find Restaurants" onPress={onPressHandler}/>
      <Button title="Find Friends"/>
    <View/>
    <View style={{padding: 20}}></View>
    <View>
    <Image source={require('../assets/eating.jpg')}
       style={{width: 400, height: 400}} />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    mainpage: {
        flex: 1,
        backgroundColor: '#E6EEF7',
        alignItems: 'center',
        justifyItems: 'center',
      }
    });