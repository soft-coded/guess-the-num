import React, {useState} from 'react'
import {View, StyleSheet, Text, Button} from "react-native"
import {StatusBar} from "expo-status-bar"
import Buttons from "./s2-buttons"
import GuessesContainer from "./s2-guesses"

function guessNum(min,max){
    return Math.floor(Math.random()*(max-min))+min
}
let initGuess=guessNum(1,100)

function GameStart({userNum, result, setResult}) {
    const [guess, setGuess]=useState(initGuess)
    const [prevGuesses,setPrevGuesses]=useState([initGuess])
    function checkGuess(num){
        setPrevGuesses(curGs=>[num,...curGs])
        if(num==userNum)
            setTimeout(()=>setResult(prevGuesses.length), 1500) 
    }
    return (
        <View style={styles.container}>
            <StatusBar style="inverted" animated/>
            <Text style={styles.textHeader}>Round {prevGuesses.length}</Text>
            <Text style={styles.textNum}>{guess}</Text>
            <Buttons userNum={userNum} guess={guess} setGuess={setGuess} checkGuess={checkGuess} result={result}/>
            <GuessesContainer prevGuesses={prevGuesses} />
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "black",
        paddingTop: 70
    },
    textHeader: {
        color: "#00adb5",
        textShadowColor: "#6a2c70",
        textShadowOffset: {width: 4, height: 4},
        textShadowRadius: 1,
        fontSize: 40,
        fontFamily: "open-sans-bold",
        marginBottom: 50,
        borderBottomColor: "grey",
        borderBottomWidth: 2
    },
    textNum: {
        color: "#f08a5d",
        textShadowColor: "#b83b5e",
        textShadowOffset: {width: 4, height: 4},
        textShadowRadius: 1,
        fontSize: 40,
        fontFamily: "open-sans-bold",
        marginBottom: 50,
        paddingHorizontal: 15,
        paddingTop: 5,
        borderColor: "#d54062",
        borderWidth: 5,
        borderRadius: 10,
        textAlign: "center"
    }
})

export default GameStart
