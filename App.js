import { StatusBar } from 'expo-status-bar';
import LogInPage from './components/login/LogInPage';
import RegisterPage from './components/register/RegisterPage';
import MainPage from './components/mainpage/MainPage';
import Restaurants from './components/restaurants/Restaurants';
import Details from './components/restaurants/Details';
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