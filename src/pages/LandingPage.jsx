import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from '../components/Landing'
import SignUp from './auth/SignUp'
import Login from './auth/Login'

function LandingPage () {
  return (
    <Routes>
      <Route path='*' element={<Landing />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/Login' element={<Login />} />
    </Routes>
  )
}

export default LandingPage
