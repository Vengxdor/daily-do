import React from 'react'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function LoginHeader ({ text }) {
  return (
    <header className='flex items-center gap-3 p-3'>
      <Link
        className='fa-solid fa-chevron-left p-3 px-4 rounded-xl border-2 border-zinc-700/70 '
        to='/'
      ></Link>
      <h2 className='font-bold text-4xl '>{text}</h2>
    </header>
  )
}

export default LoginHeader
