import React from 'react'
import {View, Text, StyleSheet, Image} from "react-native"
import {StatusBar} from "expo-status-bar"
import MainButton from "./cust-button"

function GameOver({rounds, userNum, setResult, setBegin}) {
    return (
        <View style={styles.container}>
            <StatusBar style="inverted" animated/>
            <Text style={styles.header}>Game Over</Text>
            <Image source={{uri: "https://i.pinimg.com/474x/27/f5/53/27f553d6bdbc88dd74723f3f18efdc54.jpg"}} style={styles.image} resizeMode="cover"/>
            <Text style={styles.text}>The computer took <Text style={styles.extra}>{rounds}</Text> rounds to guess <Text style={styles.extra}>{userNum}</Text>.</Text>
            <MainButton style={styles.button} textStyle={styles.buttonText} onPress={()=>{setBegin(null); setResult(null)}}>NEW GAME</MainButton>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        padding: 30
    },
    header: {
        color: "white",
        fontSize: 30,
        fontFamily: "open-sans-bold"
    },
    image:{
        width: 200,
        height: 200,
        borderRadius: 10,
        overflow: "hidden",
        marginVertical: 20
    },
    text: {
        color: "white",
        fontSize: 20,
        marginBottom: 30,
        fontFamily: "open-sans",
        textAlign: "center"
    },
    extra: {
        fontFamily: "open-sans-bold",
        color: "orange"
    },
    button: {
        borderWidth: 2,
        borderColor: "#3282b8",
        padding: 15,
        borderRadius: 10
    },
    buttonText: {
        color: "#3282b8",
        fontFamily: "open-sans-bold",
        fontSize: 20
    }
})

export default GameOver
