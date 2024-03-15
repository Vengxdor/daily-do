import React from 'react'
import { useCollection } from '../../hooks/useCollection'

// router
import { Link } from 'react-router-dom'
import DeleteCollectionModal from './DeleteCollectionModal'
import { CollectionIcon } from './CollectionIcon'
import { CollectionModal } from './CollectionModal'
import ProgressBar from '../ProgressBar'
import SignOutBtn from '../SignOutBtn'

export function ListOfCollections () {
  const { listCollections, deleteCollection } = useCollection()
  return (
    <ul className='w-full pt-7 gap-3 grid grid-cols-2'>
      {listCollections.map((collection, index) => {
        // the tasks of the current collection
        const collectionTasks = collection.tasks.filter(
          (item) => item.idCollection === collection.id
        )
        const totalTasks = collectionTasks?.length
        const completedTasks = collectionTasks.filter(
          (item) => item.isDone === true
        ).length
        return (
          <li
            className=' bg-secundary hover:bg-zinc-700/60 border flex relative justify-between border-white border-opacity-20 cursor-pointer  rounded-xl transition-colors duration-300'
            key={index}
          >
            <Link
              className=' flex flex-col font-semibold p-6 w-full'
              to={`/${collection.collectionName}/${collection.id}`}
            >
              <span className='w-12 h-12 flex justify-center items-center  bg-sky-600  rounded-2xl'>
                <CollectionIcon />
              </span>

              <span className='flex text-xl mt-6 relative items-center '>
                {collection.collectionName}
              </span>
              {totalTasks !== 0 && (
                <div className='flex justify-between text-sm  items-center'>
                  <span className='opacity-65'>
                    {completedTasks}/{totalTasks} done
                  </span>
                  <ProgressBar
                    totalTasks={totalTasks}
                    completedTasks={completedTasks}
                  />
                </div>
              )}
            </Link>
            <div className='absolute right-3 mt-3'>
              <DeleteCollectionModal
                collectionId={collection.id}
                deleteCollection={deleteCollection}
              />
            </div>
          </li>
        )
      })}
      <li>
        <CollectionModal />
        <SignOutBtn />
      </li>
    </ul>
  )
}
