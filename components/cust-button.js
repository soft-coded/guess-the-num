import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"

function MainButton({children, onPress, style, textStyle}) {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
            <View style={style}>
                <Text style={textStyle}>{children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    
})

export default MainButton
