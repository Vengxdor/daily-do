import React from 'react'
import { useCollection } from '../hooks/useCollection'
import { Link, useLocation } from 'react-router-dom'

function ItemsAside () {
  const { listCollections } = useCollection()
  const location = useLocation()

  return (
    <ul className='grid gap-3'>
      {listCollections.map((collection) => (
        <li
          className={`rounded-tl-3xl rounded-bl-3xl ml-4 ${
            location.pathname ===
              `/${collection.collectionName}/${collection.id}` && 'active'
          }`}
          key={collection.id}
        >
          <Link
            className='w-full h-full flex p-4 '
            to={`/${collection.collectionName}/${collection.id}`}
          >
            {collection.collectionName}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default ItemsAside
