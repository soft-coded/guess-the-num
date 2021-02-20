import React from 'react'
import {StyleSheet, View, Button} from "react-native"

function Buttons({setInText}) {
    return (
        <View style={styles.buttonContainer}>
          <View style={styles.button}><Button title="Continue"/></View>
          <View style={styles.button}><Button color="red" title="Clear" onPress={()=>setInText("")}/></View>
        </View>
    )
}

const styles=StyleSheet.create({
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "70%",
        marginTop: 50
    },
    button: {
        width: 100
    }
})

export default Buttons
