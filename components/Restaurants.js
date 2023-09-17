import { StyleSheet, Text, View, Button, Image, FlatList} from 'react-native';
import { useState, useEffect } from "react";
import Restaurant from './Restaurant';

export const googleAPIKey = 'AIzaSyA2uy0vc2gwvzoGNvZ7lWPhwgRO8wevGnw';
export const placeType = 'restaurant';

export default function Restaurants({ route, navigation }) {

    const { latitude, longitude } = route.params;

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {

    let radius = 1 * 1000;
  
    const url =  'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +  latitude +  ',' +  longitude +  '&radius=' +  radius +  '&type=' +  placeType +  '&key=' +  googleAPIKey;
    
    const places = [];
      
    fetch(url).then(res => {
    return res.json();
    }).then(res => {
    for (let googlePlace of res.results) {
        var place = {};
        place['placeTypes'] = googlePlace.types;
        place['placeId'] = googlePlace.place_id;
        place['placeName'] = googlePlace.name;
        place['placePhoto'] = googlePlace.photos;
        place['placePhotoRef'] = place['placePhoto'][0]["photo_reference"]
        place['url'] = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' + place['placePhotoRef'] + '&key=' + googleAPIKey;
        places.push(place);
    }
    setRestaurants(places)
    })

}, [latitude, longitude]);

    console.log(restaurants.map(nearbyPlaces => nearbyPlaces.placeName));

    function renderItem(itemData) {
        return (
            <View>
            <Restaurant navigation={navigation} placeId={itemData.item.placeId} placeName={itemData.item.placeName} placePhotoUrl={itemData.item.url}/>
            </View>
        )
    }

    return (
        <View>
        <FlatList
            horizontal={false}
            data={restaurants}
            keyExtractor={(item) => item.placeId}
            renderItem={renderItem}
            numColumns={2}/>
         </View>
    )
};

const styles = StyleSheet.create({
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16
    },
    title: {
      fontSize: 32,
    },
  });
  