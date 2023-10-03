import { auth } from '../config/config.js'
import { db } from '../config/config.js'
import {ref, onValue} from "firebase/database"
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { useState, useEffect} from "react";
import Friend from './Friend';

export default function Friends() {

    const [userData, setUserData] = useState({});

    useEffect(() => {
        const users = ref(db, 'users/');
        onValue(users, (snapshot) => {
            const data = snapshot.val();
            setUserData(data)
        })
    },[])

    console.log(userData);

    function renderItem(itemData) {
        return (
            <View>
            <Friend username={itemData.item.username} restaurant={itemData.item.restaurant}/>
            </View>
        )
      }
    
    const flatList = <FlatList
    data={userData}
    keyExtractor={(item) => item.username}
    renderItem={renderItem}
    numColumns={1}
    scrollEnabled={false}
    contentContainerStyle={{
        flexGrow: 1
    }}/>

    return (
        <View>{flatList}</View>
    )
}