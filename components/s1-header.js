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
        color: "#f08a5d",
        fontSize: 35,
        fontFamily: "open-sans-bold",
        letterSpacing: 1,
        textShadowColor: "#799351",
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 7,
        marginTop: 100
    }
})

export default Header
