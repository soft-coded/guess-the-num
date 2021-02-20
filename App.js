import React, {useState} from 'react';
import { StyleSheet, View, TextInput , Text, TouchableWithoutFeedback, Keyboard, Button} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Buttons from "./components/s1-buttons"
import Header from "./components/s1-header"

export default function App() {
  const [inText,setInText]=useState("")
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar style="inverted"/>
        <Header/>
        <TextInput keyboardType="number-pad" maxLength={2} placeholder={`${Math.floor(Math.random()*100)}`} placeholderTextColor="grey" style={styles.textInput} value={inText} onChangeText={text=>setInText(text)}/>
        <Buttons setInText={setInText}/>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: "center"
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
    fontFamily: "monospace"
  }
});
