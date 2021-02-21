import React from 'react'
import {StyleSheet, View, Button} from "react-native"

function guessNum(min,max){
    return Math.floor(Math.random()*(max-min))+min
}
let gmax=100, gmin=1

function Buttons({guess,setGuess,checkGuess}) {
    function changeNum(char){
        if(char==='l') gmax=guess
        else gmin=guess+1
        let next=guessNum(gmin,gmax)
        checkGuess(next)
        setGuess(next)
    }
    return (
        <View style={styles.buttonContainer}>
            <View style={styles.button}><Button title="Lesser" color="brown" onPress={()=>changeNum('l')}/></View>
            <View style={styles.button}><Button title="Greater" color="green" onPress={()=>changeNum('g')}/></View>
        </View>
    )
}

const styles=StyleSheet.create({
    buttonContainer:{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around"
    },
    button: {
        width: 100
    }
})

export default Buttons
