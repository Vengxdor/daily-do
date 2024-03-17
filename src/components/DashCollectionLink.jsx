/* eslint-disable react/prop-types */
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function DashCollectionLink () {
  const location = useLocation()
  return (
    <div className='flex gap-3'>
      <Link
        className={`${
          location.pathname === '/' && 'bg-hover'
        } py-1.5 px-3 rounded-2xl border border-hover transition-colors duration-300`}
        to={`${location.pathname === '/' ? '/dashboard' : '/'}`}
      >
        Collection
      </Link>
      <Link
        className={`${
          location.pathname === '/dashboard' && 'bg-hover'
        } py-1.5 px-3 rounded-2xl border border-hover transition-colors duration-300`}
        to={`${location.pathname === '/dashboard' ? '/' : '/dashboard'}`}
      >
        Dashboard
      </Link>
    </div>
  )
}

export default DashCollectionLink
