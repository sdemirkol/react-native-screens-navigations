import React from 'react';
import { StyleSheet, View, Text, TextInput, Button,TouchableOpacity } from "react-native";

function GetNumber() {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <View style={styles.componentContainer}>
                    <TextInput style={styles.textInput} keyboardType='number-pad'/>
                </View>
                <View style={styles.componentContainer}>
                    <TextInput style={styles.textInput} keyboardType='number-pad' />
                </View>
                <View style={styles.componentContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Sum</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

export default GetNumber;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    componentContainer:{
        flexDirection:'row',
        margin:10,
    },
    textInput: {
        borderWidth: 1,
        width: '80%', //flexDirection : 'row' olduğunda geçerli
        fontSize:15,
        height:35,
    },
    button:{
        alignItems:'center',
        backgroundColor: 'blue',
        width:'80%',
        padding:6
    },
    buttonText:{
        color:'white',
        fontSize:20,
    }
});