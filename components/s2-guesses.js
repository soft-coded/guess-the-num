import React from 'react'
import {Text, StyleSheet, ScrollView} from "react-native"

function GuessesContainer({prevGuesses}) {
    return (
        <ScrollView style={styles.container}>
            {
                prevGuesses.map((prevg,i)=>{
                    return <Text key={i} style={styles.prevRound}>
                        Guess {prevGuesses.length-i} : <Text style={styles.num}>{prevg}</Text>
                    </Text>
                })
            }
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    container:{
        margin: 20
    },
    prevRound:{
        color: "white",
        marginVertical: 12,
        fontFamily: "open-sans",
        fontSize: 25,
        color: "#c7b198",
        borderBottomWidth: 2,
        borderBottomColor: "grey",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    num: {
        fontFamily: "open-sans-bold"
    }
})

export default GuessesContainer
