import React from 'react'
import { ListOfCollections } from '../components/ListOfCollections'

function CollectionHome () {
  return (
    <>
    <header className='flex items-center px-7 h-20 gap-3'>
        <h2 className='text-3xl font-semibold'>Collections</h2>
      </header>

      <main>
        <ListOfCollections />
      </main>
    </>
  )
}

export default CollectionHome
