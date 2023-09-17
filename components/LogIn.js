import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';
import FlatButton from './button'
import TextButton from './textButton'
import axios from 'axios';
import {FIREBASE_API_KEY} from './firebase_key.js'

export default function LogIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setValid] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  function emailHandler(enteredEmail) {
    setEmail(enteredEmail);
  }

  function passwordHandler(enteredPassword) {
    setPassword(enteredPassword);
  }

  const validate = () => {
    return email.includes('@') & password.length > 6;
  };

  useEffect(() => {
    const isValid = validate();
    setValid(isValid);
  }, [email, password]);

  async function loginHandler(email, password) {
    try {
    const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + FIREBASE_API_KEY,
    {
        email: email,
        password: password,
        returnSecureToken: true
    });
    setAuthenticated(true);
  } catch (error) {
    Alert.alert(error.message) 
    setAuthenticated(false);
  }
} 

  function onPressHandler1() {
    loginHandler(email, password);
    if (authenticated == true) {
    navigation.navigate('Main Page');
    } else {
      navigation.navigate('Login Page');
    }
  }

  function onPressHandler2() {
    navigation.navigate('Register Page');
  }

    return (
        <View style={styles.login}>
          <View style={styles.textFields}>
          <TextInput style={styles.textInput} placeholder="Email address" onChangeText={emailHandler}/>
          <TextInput style={styles.textInput} placeholder="Password" onChangeText={passwordHandler}/>
          <FlatButton disabled={!isValid} onPress={onPressHandler1}></FlatButton>
          <TextButton onPress={onPressHandler2}></TextButton>
          </View>
        </View>
    );
  }

  const styles = StyleSheet.create({
    login: {
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