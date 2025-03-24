import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Calling from './pages/Calling'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/calling/:id' element={<Calling/>} />
    </Routes>
  )
}

export default App