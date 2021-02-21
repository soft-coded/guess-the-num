import React, {useState} from 'react'
import {View, StyleSheet, Text, Button} from "react-native"
import {StatusBar} from "expo-status-bar"
import Buttons from "./s2-buttons"

function guessNum(min,max){
    return Math.floor(Math.random()*(max-min))+min
}

function GameStart({userNum}) {
    const [guess, setGuess]=useState(guessNum(1,100))
    const [result,setResult]=useState(false)
    const [rounds,setRounds]=useState(1)
    function checkGuess(num){
        setRounds(rounds+1)
        if(num==userNum) setResult(true)
    }
    return (
        <View style={styles.container}>
            <StatusBar style="inverted" animated/>
            <Text style={styles.text}>Round {rounds}</Text>
            <Text style={styles.text}>{guess}</Text>
            <Buttons guess={guess} setGuess={setGuess} checkGuess={checkGuess}/>
            {result && <Text style={styles.text}>Rounds: {rounds}</Text>}
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black"
    },
    text: {
        color: "white",
        fontSize: 40,
        fontFamily: "monospace",
        marginBottom: 50
    }
})

export default GameStart
