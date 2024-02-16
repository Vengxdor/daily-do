import React from 'react'
import { useCollection } from '../hooks/useCollection'

// router
import { Link } from 'react-router-dom'

export function ListOfCollections () {
  const { listCollections } = useCollection()

  return (
    <ul>
      {listCollections.map((collection, index) => (
        <li key={index}>
          <Link className='text-lg underline text-blue-600' to={`/${collection.collectionName}/${collection.id}`}>
            {collection.collectionName}
          </Link>
        </li>
      ))}
    </ul>
  )
}
