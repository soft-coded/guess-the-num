import React from 'react'
import {StyleSheet, View, Text} from "react-native"

function Header() {
    return (
        <View>
            <Text style={styles.text}>Guess the number</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    text: {
        color: "white",
        fontSize: 30,
        fontFamily: "monospace",
        fontWeight: "bold",
        letterSpacing: 2,
        textShadowColor: 'grey',
        textShadowOffset: {width: 7, height: 7},
        textShadowRadius: 7
    }
})

export default Header
