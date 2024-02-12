import React from 'react'
import { CollectionModal } from './components/Collection'
import { ListOfCollections } from './components/ListOfCollections'

function MobileApp () {
  return (
    <>
      <header className='flex items-center p-10 gap-3'>
        <h2 className='text-4xl font-semibold'>Collections</h2>
        <CollectionModal />
      </header>

      <main>
        <ListOfCollections />
      </main>
    </>
  )
}

export default MobileApp
