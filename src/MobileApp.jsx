import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TasksPages from './pages/TasksPages'
import CollectionHome from './pages/CollectionHome'

function MobileApp () {
  return (
    <>
      <Routes>
        <Route path='/' element={<CollectionHome />} />
        <Route path='/:collectionName/:collectionId' element={<TasksPages />} />
      </Routes>

    </>
  )
}

export default MobileApp
