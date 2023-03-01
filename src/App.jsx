import { useState } from 'react'
import './App.css'
import Navbar from './components/molecules/Navbar/Navbar'
import Home from './components/templates/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    </>
  )
}

export default App
