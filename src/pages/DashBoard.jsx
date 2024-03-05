import React from 'react'
import PageHeader from '../components/PageHeader'
import DashCollectionLink from '../components/DashCollectionLink'
import DashBoadCollection from '../components/DashBoadCollection'
import { useUserAccount } from '../hooks/useUserAccount'

function DashBoard () {
  const { userAccount } = useUserAccount()
  return (
    <div className='w-11/12 m-auto sm:w-5/6 '>
      <PageHeader name='Dashboard' />
      <DashCollectionLink />

      <main className='pt-7'>
        <header>
          {userAccount &&
          <h2 className='text-3xl font-semibold'>Good morning, {userAccount.displayName}</h2>
          }
        </header>
        <DashBoadCollection />
      </main>
    </div>
  )
}

export default DashBoard
