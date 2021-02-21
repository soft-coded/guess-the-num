import React, {useRef} from 'react'
import {StyleSheet, View, Button, Alert} from "react-native"
import MainButton from "./cust-button"

function guessNum(min,max){
    return Math.floor(Math.random()*(max-min))+min
}

function Buttons({guess,setGuess,checkGuess, result, userNum}) {
    const gmax=useRef(100), gmin=useRef(1)
    function changeNum(char){
        if(char==='l' && userNum<guess) gmax.current=guess
        else if(char==='g' && userNum>guess) gmin.current=guess+1
        else{
            Alert.alert("Why you lying?","Liar ass nigga",[{text: ":((((", style: "destructive"}])
            return
        }
        let next=guessNum(gmin.current,gmax.current)
        checkGuess(next)
        setGuess(next)
    }
    return (
        <View style={styles.buttonContainer}>
            <MainButton style={styles.buttonL} textStyle={styles.buttonLText} onPress={()=>{if(!result)changeNum('l')}}>LESSER</MainButton>
            <MainButton style={styles.buttonG} textStyle={styles.buttonGText} onPress={()=>{if(!result)changeNum('g')}}>GREATER</MainButton>
        </View>
    )
}

const styles=StyleSheet.create({
    buttonContainer:{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around"
    },
    buttonL: {
        width: 150,
        borderWidth: 2,
        borderColor: "red",
        borderRadius: 10,
        paddingVertical: 10
    },
    buttonLText: {
        color: "red",
        textAlign: "center",
        fontFamily: "open-sans-bold",
        fontSize: 22,
        letterSpacing: 1
    },
    buttonG: {
        width: 150,
        borderWidth: 2,
        borderColor: "lightgreen",
        borderRadius: 10,
        paddingVertical: 10,
    },
    buttonGText: {
        color: "lightgreen",
        textAlign: "center",
        fontFamily: "open-sans-bold",
        fontSize: 22,
        letterSpacing: 1
    }
})

export default Buttons
