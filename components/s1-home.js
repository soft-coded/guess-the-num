import React, {useState} from 'react'
import {View, TextInput, TouchableWithoutFeedback, Keyboard, StyleSheet, Alert} from "react-native"
import { StatusBar } from 'expo-status-bar';
import Buttons from "./s1-buttons"
import Header from "./s1-header"
import Guessed from "./s1-guessed"

function HomeScreen({setBegin}) {
  const [inText,setInText]=useState("")
  const [cont, setCont]=useState(false)
  function validateInput(){
    if(isNaN(inText)||inText<1||inText>99){
      Alert.alert("Invalid Input", "Only integers between 0 and 100 are allowed.",[{text: "Okay",style: "destructive",onPress: ()=>setInText("")}])
    }
    else setCont(true)
  }
  return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <StatusBar style="inverted"/>
      <Header/>
      <TextInput keyboardType="number-pad" maxLength={2} placeholder={`${Math.floor(Math.random()*100)}`} blurOnSubmit placeholderTextColor="grey" style={styles.textInput} value={inText} onChangeText={text=>setInText(text)}/>
      <Buttons setInText={setInText} valIn={validateInput} setCont={setCont}/>
      {cont && <Guessed userNum={inText} setBegin={setBegin} />}
    </View>
  </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center'
  },
  textInput: {
    marginTop: 30,
    color: "white",
    borderBottomWidth: 2,
    borderBottomColor: "white",
    height: 60,
    textAlign: "center",
    width: 50,
    fontSize: 30,
    fontFamily: "open-sans"
  }
})

export default HomeScreen
