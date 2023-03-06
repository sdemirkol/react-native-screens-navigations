import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, Alert } from "react-native";
import NumberInput from '../components/NumberInput';
import SumButton from '../components/SumButton';
import FindResult from './FindResult';

function GetNumbers({ resultAdding }) {
    const [enteredNumber1, setEnteredNumber1] = useState();
    const [enteredNumber2, setEnteredNumber2] = useState();

    const inputHandler1 = (text) => {
        setEnteredNumber1(text);
    }

    const inputHandler2 = (text) => {
        setEnteredNumber2(text);
    }

    function buttonClick() {
        const number1 = parseInt(enteredNumber1);
        const number2 = parseInt(enteredNumber2);

        if (isNaN(number1) || isNaN(number2)) {
            Alert.alert(
                'Invalid number!',
                'Please fill in the boxes',
            )
        }
        resultAdding(number1 + number2);
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <NumberInput onChange={inputHandler1} />
                <NumberInput onChange={inputHandler2} />
                <SumButton onPressed={buttonClick}>Sum</SumButton>
            </View>
        </View>

    )
}

export default GetNumbers;

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

});