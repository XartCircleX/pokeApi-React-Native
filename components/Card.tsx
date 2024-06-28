import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function Card({data = null, navigation}) {

   console.log(data)
   

   function handleClick(){
    navigation.navigate("Details", {name: data?.url})
    }

    return (
        <TouchableOpacity style={styles.container} onPress={handleClick}>
            <Text style={styles.text}>{data?.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "orange",
        padding: 10,
        margin: 5,
    },
    text: {
        color: "white",
    }
});

