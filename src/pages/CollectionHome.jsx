import React from 'react'
import { ListOfCollections } from '../components/collection/ListOfCollections'
import PageHeader from '../components/PageHeader'
import DashCollectionLink from '../components/DashCollectionLink'

function CollectionHome () {
  return (
    <>
      <PageHeader name='Collection' />

      <main>
        <DashCollectionLink />
        <ListOfCollections />
      </main>
    </>
  )
}

export default CollectionHome
