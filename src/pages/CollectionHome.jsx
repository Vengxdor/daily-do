import React from 'react'
import { ListOfCollections } from '../components/collection/ListOfCollections'
import PageHeader from '../components/PageHeader'
import DashCollectionLink from '../components/DashCollectionLink'

function CollectionHome () {
  return (
    <div className='w-11/12 m-auto sm:w-5/6 '>
      <PageHeader name='Collections' />

      <main>
        <DashCollectionLink />
        <ListOfCollections />
      </main>
    </div>
  )
}

export default CollectionHome
