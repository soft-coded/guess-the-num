import React, {useState} from 'react'
import * as Font from "expo-font"
import AppLoading from "expo-app-loading"
import HomeScreen from "./components/s1-home"
import GameStart from "./components/s2-home"
import GameOver from "./components/s3-gameover"

function fontLoad(){
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  })
}

export default function App() {
  const [begin, setBegin]=useState()
  const [result,setResult]=useState()
  const [fontLoaded,setFontLoaded]=useState(false)

  if(!fontLoaded){
    return <AppLoading startAsync={fontLoad} onFinish={()=>setFontLoaded(true)} onError={err=>console.log(err)} />
  }

  if(!begin && !result)
    return <HomeScreen setBegin={setBegin}/>
  
  else if(!result)
    return <GameStart userNum={begin} result={result} setResult={setResult}/>
  
  return <GameOver rounds={result} userNum={begin} setBegin={setBegin} setResult={setResult}/>
}


