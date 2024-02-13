import React from 'react'
import { ListOfCollections } from '../components/ListOfCollections'
import { CollectionModal } from '../components/Collection'

function CollectionHome () {
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

export default CollectionHome
