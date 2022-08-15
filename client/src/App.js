import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function App() {

  const user = true

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path="login" element={user? <Home /> : <Login /> } />
        <Route path="register" element={user? <Home /> : <Register /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
