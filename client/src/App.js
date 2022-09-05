import React from "react"
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { useSelector } from "react-redux"

function App() {

  const { currentUser } = useSelector((state) => state.user)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={currentUser? <Home/> : <Login/> } /> 
        <Route path="register" element={currentUser? <Home /> : <Register /> } />
        <Route path="login" element={ <Login />  } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
