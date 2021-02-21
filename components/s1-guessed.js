import React from 'react'
import {StyleSheet, View, Text, Button} from "react-native"

function Guessed({userNum, setBegin}) {
    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>Entered</Text>
            <Text style={styles.textNum}>{userNum}</Text>
            <View style={styles.button}><Button title="Begin" color="purple" onPress={()=>setBegin(userNum)}/></View>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        marginVertical: 40,
        padding: 20,
        alignItems: "center",
        borderWidth: 2,
        borderColor: "grey",
        borderRadius: 10
    },
    textHeader: {
        color: "white",
        fontSize: 30,
        fontFamily: "monospace",
        textShadowColor: "grey",
        textShadowOffset: {width: 5, height: 5},
        textShadowRadius: 7
    },
    textNum: {
        color: "white",
        marginVertical: 20,
        fontSize: 30,
        fontFamily: "monospace"
    },
    button: {
        marginTop: 10,
        width: 200
    }
})

export default Guessed
