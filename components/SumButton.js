import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function SumButton({children, onPressed}) {
    return (
        <View style={styles.componentContainer}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={onPressed}>{children}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SumButton;

const styles= StyleSheet.create({
    componentContainer: {
        flexDirection: 'row',
        margin: 10,
    },
    button:{
        alignItems:'center',
        justifyContent:'center',        
        backgroundColor: '#2196f3',
        width:'80%',
        padding:6
    },
    buttonText:{
        color:'white',
        fontSize:20,
    }
})