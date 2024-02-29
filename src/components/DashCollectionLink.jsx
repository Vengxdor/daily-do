/* eslint-disable react/prop-types */
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function DashCollectionLink () {
  const location = useLocation()
  return (
    <div className='px-10 flex gap-3'>
      <Link
        className={`${
          location.pathname === '/' && 'bg-zinc-500'
        } py-1.5 px-3 rounded-2xl border border-zinc-500 transition-colors duration-300`}
        to='/'
      >
        Collection
      </Link>
      <Link
        className={`${
          location.pathname === '/DashBoard' && 'bg-zinc-500'
        } py-1.5 px-3 rounded-2xl border border-zinc-500 transition-colors duration-300`}
        to={`${location.pathname === '/DashBoard' ? '/' : '/DashBoard'}`}
      >
        Dashboard
      </Link>
    </div>
  )
}

export default DashCollectionLink
