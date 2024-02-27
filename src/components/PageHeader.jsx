/* eslint-disable react/prop-types */
import React from 'react'

function PageHeader ({ name }) {
  return (
    <header className='flex items-center justify-between px-7 h-20 gap-3'>
      <h2 className='text-3xl font-semibold'>{name}</h2>
      <img
        className='w-10 rounded-full cursor-pointer'
        src='https://imgs.search.brave.com/uXb94Ry8xwPwPJpsoSkLzGuucWmnLddrrWX_aG-EkJw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzk3LzAwLzA5/LzM2MF9GXzk3MDAw/OTA4X3d3SDJnb0lp/aHdyTW9lVjlRRjNC/VzZIdHBzVkZhTlZN/LmpwZw'
        alt='unknow'
      />
    </header>
  )
}

export default PageHeader
