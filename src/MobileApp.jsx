import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import TasksPages from './pages/TasksPages'
import CollectionHome from './pages/CollectionHome'
import DashBoard from './pages/DashBoard'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import Landing from './pages/Landing'

function MobileApp () {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userAccount'))
    const collectionRef = '/Collections'

    if (!user) return

    // redirect the user unless he is in collections
    if (location.href.includes(collectionRef)) return

    if (user) {
      location.href = collectionRef
    }
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/Collections' element={<CollectionHome />} />
        <Route path='/:collectionName/:collectionId' element={<TasksPages />} />
        <Route path='/DashBoard' element={<DashBoard />} />
        <Route path='/SignUp' element={<SignUp />}/>
        <Route path='/Login' element={<Login />}/>
      </Routes>

    </>
  )
}

export default MobileApp
