import React, {useState} from 'react'
import HomeScreen from "./components/s1-home"
import GameStart from "./components/s2-home"

export default function App() {
  const [begin, setBegin]=useState()
  return (
    begin?<GameStart userNum={begin}/>:<HomeScreen setBegin={setBegin}/>
  );
}


