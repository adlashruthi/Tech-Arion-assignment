import React from 'react'
import {Route,Routes} from "react-router-dom"
import Counter from './Counter'
import Grid from './Grid'
import Login from './Login'
import Navbar from './Navbar'
const App = () => {
  return (
    <div className="app">
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Counter/>}/>
        <Route path='/Grid' element={<Grid/>} />
        <Route path='/Login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App