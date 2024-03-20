import React from 'react'
import { ListOfCollections } from '../components/collection/ListOfCollections'
import PageHeader from '../components/PageHeader'
import DashCollectionLink from '../components/DashCollectionLink'

function CollectionHome () {
  return (
    <div className='w-11/12 mx-auto sm:w-5/6'>
      <div className='block wide:hidden'>
        <PageHeader name='Collections' />
      </div>
      <h1 className='hidden wide:block text-4xl font-semibold my-10'>
        Collections
      </h1>

      <main>
        <DashCollectionLink />
        <div className='mx-auto w-full'>
          <ListOfCollections />
        </div>
      </main>
    </div>
  )
}

export default CollectionHome
