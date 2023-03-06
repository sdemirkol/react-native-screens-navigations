import { StyleSheet, View, TextInput } from 'react-native';

function NumberInput({onChange}) {
    return (
        <View style={styles.componentContainer}>
            <TextInput style={styles.textInput} keyboardType='number-pad' onChangeText={onChange} />
        </View>
    )
}

export default NumberInput;

const styles = StyleSheet.create({
    componentContainer: {
        flexDirection: 'row',
        margin: 10,
    },
    textInput: {
        borderWidth: 1,
        width: '80%', //flexDirection : 'row' olduğunda geçerli
        fontSize: 15,
        height: 35,
        paddingHorizontal: 10,
    },
});