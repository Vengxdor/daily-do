import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
function NotFound () {
  return (
    <>
    <header className='p-10 wide:hidden'>
      <Logo />
    </header>
    <main className='w-full flex justify-center items-center h-[65dvh]  flex-col gap-7 px-3 '>
        <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold '>
          404 - Looks like you&apos;re lost<span className='text-primary'>.</span>
        </h1>
        <p className='w-10/12 text-sm md:text-base md:w-1/2 text-center text-zinc-400 opacity-80'>
          Maybe this page used to exist or just spelled something wrong.
          Changes are you spelled something wrong, so can you double check the URL?
        </p>
        <div className='flex gap-3 mt-5 *:transition-colors *:duration-300'>
          <Link
            to={'/'}
            className='p-2 px-4 hover:bg-rose-700 bg-primary shadow shadow-pink-900 rounded-lg'
          >
            Return to collections
          </Link>
        </div>
      </main>
    </>
  )
}

export default NotFound
