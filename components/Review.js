import { StyleSheet, Text, View, Button, Image, FlatList, ScrollView} from 'react-native';

export default function Review({author_name, rating, relative_time_description, text}) {
    return (
        <View  style={styles.gridItem}>
        <Text style={{fontWeight: 'bold'}}>Author: {author_name}</Text>
        <Text style={{fontWeight: 'bold'}}>Rating: {rating}</Text>
        <Text style={{fontWeight: 'bold'}}>Time posted: {relative_time_description}</Text>
        <Text>Review: {text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
      margin: 16,
      borderRadius: 8,
      elevation: 4,
      justifyContent: 'left',
      alignItems: 'left',
      backgroundColor: '#E6EEF7'
    }
});