import React from 'react'
import { useCollection } from '../hooks/useCollection'

// router
import { Link } from 'react-router-dom'

export function ListOfCollections () {
  const { listCollections } = useCollection()
  // localStorage.clear()

  return (
    <ul>
      {listCollections.map((collection, index) => (
        <li key={index}>
          <Link to={`/${collection.collectionName}/${collection.id}`}>
            {collection.collectionName}
          </Link>
        </li>
      ))}
    </ul>
  )
}