import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';
import RegisterButton from './RegisterButton'
import { auth } from './config.js'
import { db } from './config.js'
import {ref,set, update, onValue} from "firebase/database"

export default function Register({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [url, setURL] = useState('');
  const [isValid, setValid] = useState(false);

  function nameHandler(enteredName) {
    setUsername(enteredName);
  }

  function emailHandler(enteredEmail) {
    setEmail(enteredEmail);
  }

  function passwordHandler(enteredPassword) {
    setPassword(enteredPassword);
  }

  function urlHandler(enteredURL) {
    setURL(enteredURL);
  }

  const validate = () => {
    return email.includes('@') & password.length > 6;
  };

  useEffect(() => {
    const isValid = validate();
    setValid(isValid);
  }, [email, password]);

  function registerHandler(email, password) {
    auth.createUserWithEmailAndPassword(email, password).then(function() {
    Alert.alert('User registered successfully!')
    const user = auth.currentUser;
    user.updateProfile({
    displayName: username}).catch(error => {
      console.log('error',error);
    })
    set(ref(db, 'users/' + username),{
      username: username,
      email: email,
      photoURL: url,
      retaurant: ""
  }).then(function() { console.log("User successfully entered in database!")}).then(navigation.navigate('Login Page')).catch(error => console.log(error))
}).catch(error => Alert.alert(error.message))
}

    function onPressHandler() {
    registerHandler(email, password);
  }

    return (
        <View style={styles.register}>
          <View style={styles.textFields}>
          <TextInput style={styles.textInput} placeholder="Username" onChangeText={nameHandler}/>
          <TextInput style={styles.textInput} placeholder="Email address" onChangeText={emailHandler}/>
          <TextInput style={styles.textInput} placeholder="Password" onChangeText={passwordHandler}/>
          <TextInput style={styles.textInput} placeholder="Photo URL" onChangeText={urlHandler}/>
          <RegisterButton disabled={!isValid} onPress={onPressHandler}></RegisterButton>
          </View>
        </View>
    );
  }

  const styles = StyleSheet.create({
    register: {
      marginTop: 20,
      marginLeft: 30,
      marginBottom: 300,
      height: 250,
      width: 250,
      backgroundColor: 'white',
      alignItems: 'left',
      justifyContent: 'left',
      color: '#d3d3d3',
      borderWidth: 1,
      borderRadius: 10,
      shadowColor: "#E6EEF7",
      borderColor: '#ABB0B8',
    },
    textInput: {
      borderWidth: 1,
      borderColor:'#d3d3d3',
      fontSize: 20,
      marginTop: 20,
      marginLeft: 20,
      padding: 5,
    },
    textFields: {
      alignItems: 'left',
      justifyItems: 'left',
      width: 200,
    },
  });