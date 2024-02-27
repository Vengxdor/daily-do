import React from 'react'
import PageHeader from '../components/PageHeader'
import DashCollectionLink from '../components/DashCollectionLink'
import DashBoadCollection from '../components/DashBoadCollection'

function DashBoard () {
  return (
    <>
      <PageHeader name='Dashboard' />
      <DashCollectionLink />

      <main className='p-7'>
        <header>
          <h2 className='text-3xl font-semibold'>Good morning, Jone Doe</h2>
        </header>
        <DashBoadCollection />
      </main>
    </>
  )
}

export default DashBoard
