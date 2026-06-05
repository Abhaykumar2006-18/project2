import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'


const App = () => {
  return (
    <div className='bg-black  w-[100%]'>
      <Nav/>
      <Routes>
        <Route  path="/home" element={<Home />} ></Route>
        <Route path="/about" element={<About />} />
      
      </Routes>
     
      
      
      
    </div>
  )
}

export default App