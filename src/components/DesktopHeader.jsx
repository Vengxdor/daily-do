import React from 'react'
import { Link } from 'react-router-dom'
import DashboardIcon from '../icons/DashboardIcon'

function DesktopHeader () {
  return (
    <header className='hidden wide:block h-16 bg-secundary border-b border-black '>
      <nav className='w-full h-full flex justify-between items-center p-4'>
        <div className='flex gap-5 text-xl'>
          <Link className='flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity duration-300' to='/dashboard'>
          <DashboardIcon />
            Dashboard
            </Link>
          <Link className='flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity duration-300' to='/'>
          <i className="fa-solid fa-folder-open"></i>
            Collections
            </Link>
        </div>
        <img
          className='rounded-full'
          src='https://imgs.search.brave.com/uXb94Ry8xwPwPJpsoSkLzGuucWmnLddrrWX_aG-EkJw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzk3LzAwLzA5/LzM2MF9GXzk3MDAw/OTA4X3d3SDJnb0lp/aHdyTW9lVjlRRjNC/VzZIdHBzVkZhTlZN/LmpwZw'
          alt='User img'
          width={35}
          height={35}
        />
      </nav>
    </header>
  )
}

export default DesktopHeader
