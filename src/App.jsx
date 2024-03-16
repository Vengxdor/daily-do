import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TasksPages from './pages/TasksPages'
import CollectionHome from './pages/CollectionHome'
import DashBoard from './pages/DashBoard'

function MobileApp () {
  return (
    <>
      <Routes>
        <Route path='/' element={<CollectionHome />} />
        <Route path='/:collectionName/:collectionId' element={<TasksPages />} />
        <Route path='/Dashboard' element={<DashBoard />} />
      </Routes>

    </>
  )
}

export default MobileApp
