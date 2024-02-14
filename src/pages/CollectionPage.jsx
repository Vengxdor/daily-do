import React from 'react'
import { Link, useParams } from 'react-router-dom'

function CollectionPage () {
  const { collectionId, collectionName } = useParams()
  return (
    <>
    <header className='flex items-center'>

      <Link className='text-blue-600 fa-solid fa-chevron-left ' to='/'>Back</Link>
      <strong className='text-3xl'>{collectionName}</strong>
    </header>
    </>
  )
}

export default CollectionPage
