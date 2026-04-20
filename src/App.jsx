import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import {Routes, Route} from "react-router-dom"
import About from './pages/About'
import Navbar from './components/Navbar'
import Register from './pages/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/registration" element={<Register/>}/>


    </Routes>
    </>
    
  )
}


export default App;
