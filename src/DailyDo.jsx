import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TasksPages from './pages/TasksPages'
import CollectionHome from './pages/CollectionHome'
import DashBoard from './pages/DashBoard'
import Account from './pages/Account'
import NotFound from './pages/NotFound'
import DesktopHeader from './components/DesktopHeader'

function DailyDo () {
  return (
    <>
      <DesktopHeader />
      <div className='wide:flex  wide:items-start wide:h-[calc(100vh-4rem)]'>
        <Routes>
          <Route path='/' element={<CollectionHome />} />
          <Route
            path='/:collectionName/:collectionId'
            element={<TasksPages />}
          />
          <Route path='/dashBoard' element={<DashBoard />} />
          <Route path='/account' element={<Account />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default DailyDo
