import { StyleSheet, View, Text, Button } from "react-native";

function FindResult({result, againButtonPress}) {
    return (
        <View style={styles.container}>
            <Text style={styles.resultText}>{result}</Text>
            <Button title="Sum Again" onPress={againButtonPress}>Sum Again</Button>
        </View>
    )
}

export default FindResult;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',        
    },
    resultText:{
        color:'black',
        fontSize:25,
        marginBottom:15
    },
});