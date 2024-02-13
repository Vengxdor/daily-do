import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CollectionPage from './pages/CollectionPage'
import CollectionHome from './pages/CollectionHome'

function MobileApp () {
  return (
    <>
      <Routes>
        <Route path='/' element={<CollectionHome />} />
        <Route path='/:collectionName/:collectionId' element={<CollectionPage />} />
      </Routes>

    </>
  )
}

export default MobileApp
