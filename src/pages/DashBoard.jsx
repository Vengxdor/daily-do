import React from 'react'
import PageHeader from '../components/PageHeader'
import DashCollectionLink from '../components/DashCollectionLink'
import DashBoadCollection from '../components/DashBoadCollection'
import { useUserAccount } from '../hooks/useUserAccount'

function DashBoard () {
  const { userData } = useUserAccount()
  return (
    <div className='w-11/12 mx-auto mb-10 sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2 '>
      <div className='block wide:hidden'>
        <PageHeader name='Dashboard' />
      </div>
      <h1 className='hidden wide:block text-4xl font-semibold my-10'>
        Dashboard
      </h1>
      <DashCollectionLink />
      <main className='pt-7'>
        <header>
          {userData && (
            <h2 className='text-3xl font-semibold'>
              Good morning, {userData.username}
            </h2>
          )}
        </header>
        <DashBoadCollection />
      </main>
    </div>
  )
}

export default DashBoard
