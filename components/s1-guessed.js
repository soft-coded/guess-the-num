import React from 'react'
import {StyleSheet, View, Text, Button} from "react-native"
import MainButton from "./cust-button"

function Guessed({userNum, setBegin}) {
    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>Entered: {userNum}</Text>
            <MainButton style={styles.button} textStyle={styles.buttonText} onPress={()=>setBegin(userNum)}>BEGIN</MainButton>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        marginVertical: 40,
        padding: 50,
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#d3d3d3",
        borderRadius: 10
    },
    textHeader: {
        color: "orange",
        fontSize: 30,
        fontFamily: "open-sans-bold",
        marginBottom: 15,
        letterSpacing: 2
    },
    button: {
        marginTop: 20,
        width: 200,
        paddingVertical: 10,
        borderWidth: 2,
        borderColor: "pink",
        borderRadius: 10
    },
    buttonText:{
        color: "pink",
        textAlign: "center",
        fontSize: 20,
        letterSpacing: 2,
        fontFamily: "open-sans-bold"
    }
})

export default Guessed
