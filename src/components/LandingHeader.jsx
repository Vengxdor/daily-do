import React from 'react'
import Logo from '../../public/Logo'
import { Link } from 'react-router-dom'

function LandingHeader () {
  return (
    <header className='flex w-full justify-around'>
    <Logo />
    <div className='flex gap-3 items-center text-opacity-20'>
      <Link
        to={'/Login'}
        className='hover:bg-zinc-800 p-1.5 px-3 rounded-lg transition-all duration-300'
        href='#'
      >
        Log in
      </Link>
      <Link
        to={'/SignUp'}
        className='border p-1.5 px-3 border-zinc-700 rounded-lg hover:border-zinc-400 transition-all duration-300'
        href='#'
      >
        Sign up
      </Link>
    </div>
  </header>
  )
}

export default LandingHeader
