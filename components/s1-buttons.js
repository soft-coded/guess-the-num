import React from 'react'
import {StyleSheet, View, Button, Keyboard} from "react-native"
import MainButton from "./cust-button"

function Buttons({setInText, valIn, setCont}) {
    return (
        <View style={styles.buttonContainer}>
          <MainButton style={styles.buttonReset} textStyle={styles.textStyleRed} onPress={()=>{Keyboard.dismiss(); setInText(""); setCont(false)}}>RESET</MainButton>
          <MainButton style={styles.buttonCont} textStyle={styles.textStyleGreen} onPress={()=>{Keyboard.dismiss(); valIn()}}>CONTINUE</MainButton>
        </View>
    )
}

const styles=StyleSheet.create({
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        marginTop: 50
    },
    buttonReset: {
        borderWidth: 2,
        borderColor: "red",
        paddingVertical: 10,
        paddingHorizontal: 5,
        width: 140,
        borderRadius: 10
    },
    textStyleRed:{
        color: "red",
        letterSpacing: 1,
        fontSize: 20, 
        fontFamily: "open-sans-bold", 
        textAlign:"center"
    },
    textStyleGreen:{
        color: "lightgreen",
        letterSpacing: 1,
        fontSize: 20, 
        fontFamily: "open-sans-bold", 
        textAlign:"center"
    },
    buttonCont: {
        borderWidth: 2,
        borderColor: "lightgreen",
        paddingVertical: 10,
        paddingHorizontal: 5,
        width: 140,
        borderRadius: 10
    }
})

export default Buttons
