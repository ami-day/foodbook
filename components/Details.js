import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Loading, FlatList, ScrollView, Alert } from 'react-native';
import { useState, useEffect } from "react";
import Review from './Review';
import {googleAPIKey} from './firebase_key.js'
import { auth } from './config.js'
import { db } from './config.js'
import {ref, update} from "firebase/database"
import RegisterButton from './RegisterButton'

export default function Details({route, navigation}) {

  const { placeId } = route.params;

  const [details, setDetails] = useState([]);

  useEffect(() => {

  async function fetchMyAPI() {
    
    const details = []
      
    const url = 'https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Crating%2Creviews%2Cuser_ratings_total&place_id=' + placeId + '&key=' + googleAPIKey;

    let response = await fetch(url)

    response = await response.json()

    var detail_list = {};
    result = response['result']
    detail_list['name'] = result["name"]
    detail_list['rating'] = result["rating"]
    detail_list['reviews'] = result["reviews"]
    detail_list['user_ratings_total'] = result['user_ratings_total']
    details.push(detail_list);
    setDetails(details)
  }
  fetchMyAPI()
}, [placeId])

function renderItem(itemData) {
  return (
      <View>
      <Review author_name={itemData.item.author_name} rating={itemData.item.rating} relative_time_description={itemData.item.relative_time_description} text={itemData.item.text}/>
      </View>
  )
}

const DATA = [{'author_name': 'No reviews found', 'rating': 'No reviews found', 'relative_time_description': 'No reviews found', 'text': 'No reviews found.'}]

if (details.length) {
  placeName = <Text style={styles.title}>{details[0]['name']}</Text>
  placeRating = <Text style={styles.header}>Average Rating: {details[0]['rating']}</Text>
  placeUserRatings = <Text style={styles.header}>Number User Ratings: {details[0]['user_ratings_total']}</Text>
  const review_info = [];
  for (let i = 0; i < details[0]['reviews'].length; i++) {
    var info = {};
    info['author_id'] = i
    info['author_name'] = details[0]['reviews'][i]['author_name'];
    info['rating'] = details[0]['reviews'][i]['rating'];
    info['relative_time_description'] = details[0]['reviews'][i]['relative_time_description'];
    info['text'] = details[0]['reviews'][i]['text'];
    review_info.push(info)
  }
  flatList = <FlatList
  data={review_info}
  keyExtractor={(item) => item.author_name}
  renderItem={renderItem}
  numColumns={1}
  scrollEnabled={false}
  contentContainerStyle={{
    flexGrow: 1,
    }}/>
} else {
  placeName = <Text style={styles.title}>Error loading restaurants data.</Text>
  placeRating = <Text style={styles.title}>Error loading restaurants data.</Text>
  placeUserRatings = <Text style={styles.title}>Error loading restaurants data.</Text>
  flatList = <FlatList
  data={DATA}
  keyExtractor={(item) => item.author_id}
  renderItem={renderItem}
  numColumns={1}
  scrollEnabled={false}
  contentContainerStyle={{
    flexGrow: 1,
    }}/>
}

function updateHandler() {
  console.log("hello");
  const user = auth.currentUser;
  console.log(username);
  update(ref(db, 'users/' + user.displayName),{
    retaurant: placeId
  }).then(function() { console.log("User successfully updated the database!")}).catch(error => Alert.alert('error',error.message))
}

return (
<ScrollView>
<View>{placeName}</View>
<View>{placeRating}</View>
<View>{placeUserRatings}</View>
<Button title="Going" onPress={updateHandler}></Button>
<Text style={styles.header}>Reviews</Text>
<View>{flatList}</View>
</ScrollView>
)
}

    const styles = StyleSheet.create({
      title: {
        fontSize: 32
      },
      header: {
        fontSize: 20
      },
      review: {
        flex: 1,
        margin: 16,
        height: 150,
        width: 150,
        borderRadius: 8,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6EEF7'
      }
    });