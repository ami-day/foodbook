import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import LogInPage from './components/LogInPage';
import MainPage from './components/MainPage';
import RegisterPage from './components/RegisterPage';
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
        <Stack.Screen name="Main Page" component={MainPage}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}