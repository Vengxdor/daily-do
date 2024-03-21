import React from 'react'
import { Link } from 'react-router-dom'
import SignOutBtn from '../components/SignOutBtn'
import { useUserAccount } from '../hooks/useUserAccount'

function Account () {
  const { userData, userAccount } = useUserAccount()
  return (
    <div className='w-11/12 m-auto sm:w-5/6 py-6 md:w-1/2 lg:w-2/5'>
      <header className='flex items-center  gap-3 '>
        <Link
          className='fa-solid fa-chevron-left p-3 px-4 rounded-full bg-zinc-700/50 '
          to='/'
        ></Link>
        <h2 className='text-3xl font-bold'>My account</h2>
      </header>
      <article className='flex gap-3 items-center my-7'>
        <img
          className='w-14 rounded-full cursor-pointer'
          src='https://imgs.search.brave.com/uXb94Ry8xwPwPJpsoSkLzGuucWmnLddrrWX_aG-EkJw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzk3LzAwLzA5/LzM2MF9GXzk3MDAw/OTA4X3d3SDJnb0lp/aHdyTW9lVjlRRjNC/VzZIdHBzVkZhTlZN/LmpwZw'
          alt='unknow'
        />
        <h2 className='text-2xl'>{userData.username}</h2>
      </article>
      <main className='w-full bg-secundary rounded-xl p-4 '>
        <ul className='grid gap-7'>
          <li className='flex items-center justify-between'>
            <div className='flex flex-col '>
              <span className='opacity-70'>Display Name</span>
              <strong>{userData.username}</strong>
            </div>
            <button className='p-1.5 px-4 bg-zinc-700 rounded-xl'>Edit</button>
          </li>
          <li className='flex items-center justify-between'>
            <div className='flex flex-col '>
              <span className='opacity-70'>Email</span>
              <strong>{userAccount.email}</strong>
            </div>
            <button className='p-1.5 px-4 bg-zinc-700 rounded-xl'>Edit</button>
          </li>
          <li className='flex items-center justify-between'>
            <div className='flex flex-col '>
              <span className='opacity-70'>Password</span>
              <strong>*******</strong>
            </div>
            <button className='p-1.5 px-4 bg-zinc-700 rounded-xl'>
              Change
            </button>
          </li>
        </ul>
      </main>
      <div className='mt-4 md:flex sm:justify-center'>
        <SignOutBtn />
      </div>
    </div>
  )
}

export default Account
