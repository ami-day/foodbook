import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';
import FlatButton from './button'
import TextButton from './textButton'

export default function Register({ navigation }) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setValid] = useState(false);

  function nameHandler(enteredName) {
    setName(enteredName);
  }
  
  function usernameHandler(enteredUsername) {
    setUsername(enteredUsername);
  }
  
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

  function onPressHandler() {
    console.log(name);
  }

    return (
        <View style={styles.register}>
          <View style={styles.textFields}>
          <TextInput style={styles.textInput} placeholder="Name" onChangeText={nameHandler}/>
          <TextInput style={styles.textInput} placeholder="UserName" onChangeText={usernameHandler}/>
          <TextInput style={styles.textInput} placeholder="Email address" onChangeText={emailHandler}/>
          <TextInput style={styles.textInput} placeholder="Password" onChangeText={passwordHandler}/>
          <FlatButton disabled={!isValid} onPress={onPressHandler}></FlatButton>
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