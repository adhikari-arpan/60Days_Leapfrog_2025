import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "arpan",
    age: 18
  } 

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl'>Tailwind Test</h1>
      {/* <Card channel="arpan" someObje={myObj} /> */}
      <Card username="Arpan Adhikari" mainText="Computer Engineering Student"/>
      <Card username="Arpan Adhikari" mainText="Computer Engineering Student" descripText="NCIT"/>
    </>
  )
}

export default App
