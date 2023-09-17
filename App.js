import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import LogInPage from './components/LogInPage';
import RegisterPage from './components/RegisterPage';
import MainPage from './components/MainPage';
import Restaurants from './components/Restaurants';
import Details from './components/Details';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
    <StatusBar style="dark" />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login Page" component={LogInPage}/>
        <Stack.Screen name="Register Page" component={RegisterPage}/>
        <Stack.Screen name="Main Page" component={MainPage}/>
        <Stack.Screen name="Restaurants Page" component={Restaurants}/>
        <Stack.Screen name="Details Page" component={Details}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}