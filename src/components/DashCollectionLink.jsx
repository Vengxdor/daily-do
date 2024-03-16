/* eslint-disable react/prop-types */
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function DashCollectionLink () {
  const location = useLocation()
  return (
    <div className='ml-4 flex gap-3'>
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
          location.pathname === '/Dashboard' && 'bg-zinc-500'
        } py-1.5 px-3 rounded-2xl border border-zinc-500 transition-colors duration-300`}
        to={`${location.pathname === '/Dashboard' ? '/' : '/Dashboard'}`}
      >
        Dashboard
      </Link>
    </div>
  )
}

export default DashCollectionLink
