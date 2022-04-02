import React from 'react'
import { render } from 'react-dom'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
function App() {
  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />}/>
        <Route path="*" element={<Navigate to="/signup" />}/>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App