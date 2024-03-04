import React from 'react'
import Logo from '../../public/Logo'
import { Link } from 'react-router-dom'

function Landing () {
  return (
    <div className=' p-6 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
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
      <main className='w-full flex justify-center h-[70vh] items-center flex-col gap-7 '>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold '>
          DailyDo, Best Task App<span className='text-primary'>.</span>
        </h1>
        <p className='w-1/2 text-center text-zinc-400 opacity-80'>
          Keep track of the daily tasks in life and get that satisfaction upon
          completion.
        </p>
        <div className='flex gap-3 mt-5 *:transition-colors *:duration-300'>
          <Link
            to={'/Collections'}
            className='p-2 px-4 hover:bg-rose-700 bg-primary shadow shadow-pink-900 rounded-lg'
          >
            Get Started
          </Link>
          <a
            className='p-2 px-4 hover:bg-zinc-700 bg-zinc-800 shadow shadow-zinc-900  rounded-lg'
            href='https://github.com/Vengxdor/daily-do'
          >
            Learn More
          </a>
        </div>
      </main>
    </div>
  )
}

export default Landing
