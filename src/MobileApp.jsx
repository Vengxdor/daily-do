import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TasksPages from './pages/TasksPages'
import CollectionHome from './pages/CollectionHome'
import DashBoard from './pages/DashBoard'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
function MobileApp () {
  return (
    <>
      <Routes>
        <Route path='/' element={<CollectionHome />} />
        <Route path='/:collectionName/:collectionId' element={<TasksPages />} />
        <Route path='/DashBoard' element={<DashBoard />} />
        <Route path='/Login' element={<Login />}/>
        <Route path='/SignUp' element={<SignUp />}/>
      </Routes>

    </>
  )
}

export default MobileApp
