import React, { useState } from 'react'
import { useCollection } from '../hooks/useCollection'

// router
import { Link } from 'react-router-dom'
import DeleteCollectionBtn from './DeleteCollectionBtn'

export function ListOfCollections () {
  const { listCollections, deleteCollection } = useCollection()
  const [isDeleteOpen, setDeleteOpen] = useState(false)

  return (
    <ul className='w-full p-7 gap-3 flex flex-col'>
      {listCollections.map((collection, index) => (
        <li
          className='flex bg-zinc-700/30 hover:bg-zinc-700/40 border border-white border-opacity-20 cursor-pointer p-4 rounded-xl transition-colors duration-300'
          key={index}
        >
          <Link
            className='text-2xl flex w-full h-full'
            to={`/${collection.collectionName}/${collection.id}`}
          >
            {collection.collectionName}
          </Link>
          <DeleteCollectionBtn collectionId={collection.id} deleteCollection={deleteCollection} isDeleteOpen={isDeleteOpen} setDeleteOpen={setDeleteOpen}/>
          <button
            onClick={() => setDeleteOpen(!isDeleteOpen)}
            className='fa-solid fa-x'
          ></button>
        </li>
      ))}
    </ul>
  )
}
