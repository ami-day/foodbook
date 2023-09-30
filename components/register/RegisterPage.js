import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Register from './Register';

export default function RegisterPage({ navigation }) {
  return (
    <>
    <StatusBar style="light" />
    <View style={styles.container}>
    <View style={styles.header}>
    <Image style={{height: 75, width: 75}} source={require('../assets/foodbook1.jpg')}/>
    <Text style={styles.facebook}>foodbook</Text>
    </View>
    <Register navigation={navigation}></Register>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#E6EEF7',
    alignItems: 'left',
    justifyItems: 'left',
    justifyContent: 'space-between',
  },
  header: {
    marginTop: 100,
    marginLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyItems: 'space-between',
  },
  facebook: {
    color: '#1877F2',
    fontSize: 40,
    marginLeft: 10,
  }
});