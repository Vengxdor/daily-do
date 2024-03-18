import React, { useState, useEffect } from 'react'
import { useCollection } from '../hooks/useCollection'
import { Link, useLocation } from 'react-router-dom'

function ItemsAside () {
  const { listCollections } = useCollection()
  const location = useLocation()
  const [currentCollectionId, setCurrentCollectionId] = useState(null)

  // Obtener el collectionId de la URL actual al montar el componente o cuando cambie la ubicación
  useEffect(() => {
    const pathnameParts = location.pathname.split('/')
    if (pathnameParts.length >= 3) {
      setCurrentCollectionId(pathnameParts[2])
    } else {
      setCurrentCollectionId(null)
    }
  }, [location.pathname])

  return (
    <ul className='grid gap-3'>
      {listCollections.map((collection) => (
        <li
          key={collection.id}
        >
          <Link
            className={`w-full h-full ml-4 flex p-4 rounded-tl-3xl rounded-bl-3xl ${collection.id === currentCollectionId && 'active'}`}
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
