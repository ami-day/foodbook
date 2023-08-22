import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

export default function MainPage() {
    return (
        <View style={styles.mainpage}>
          <Text>Hello World!</Text>
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