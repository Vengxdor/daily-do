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

      <main>
        <div className='block wide:hidden'>

        <DashCollectionLink />
        </div>
        <ListOfCollections />
      </main>
    </div>
  )
}

export default CollectionHome
