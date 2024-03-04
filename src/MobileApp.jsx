import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import TasksPages from './pages/TasksPages'
import CollectionHome from './pages/CollectionHome'
import DashBoard from './pages/DashBoard'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import Landing from './pages/Landing'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { useUserAccount } from './hooks/useUserAccount'

function MobileApp () {
  const { userAccount, setUserAccount } = useUserAccount()
  useEffect(() => {
    const listen = onAuthStateChanged(auth, userCredential => {
      setUserAccount(userCredential)
      const collectionRef = '/Collections'
      if (location.href.includes(collectionRef)) return
      if (userAccount) {
        location.href = collectionRef
      } else {
        setUserAccount(null)
      }
    })

    return () => {
      listen()
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
