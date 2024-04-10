import React from 'react'
import { useCollection } from '../hooks/useCollection'
import { Link, useLocation } from 'react-router-dom'

function ItemsAside () {
  const { listCollections } = useCollection()
  const location = useLocation()
  const currentLocation = location.pathname.replace('%20', '')

  return (
    <ul className='grid gap-3 '>
      {listCollections.map((collection) => (
        <li
          className={`rounded-tl-3xl rounded-bl-3xl ml-4 opacity-60 hover:opacity-100 transition-opacity duration-300 ${
            currentLocation ===
              `/${collection.collectionName.replace(' ', '')}/${
                collection.id
              }` && 'active'
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
