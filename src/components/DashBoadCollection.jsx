import React from 'react'
import TaskList from '../components/tasks/TaskList'
import { Link } from 'react-router-dom'
import { useCollection } from '../hooks/useCollection'

function DashBoadCollection () {
  const { listCollections, toggleExpanded } = useCollection()
  return (
    <ul className='w-full flex flex-col mt-10 gap-5'>
      {listCollections.map((collection) => {
        const tasksOfCollection = collection.tasks
          .filter((item) => item.idCollection === collection.id)
          .slice(0, 2)
        return (
          <li
            className='bg-zinc-700/60 hover:bg-zinc-700/60 rounded-2xl transition-colors duration-300 overflow-hidden'
            key={collection.id}
          >
            <div
              onClick={() => toggleExpanded(collection.id)}
              className='flex items-center justify-between p-5'
            >
              <strong className='text-xl'>{collection.collectionName}</strong>
              <span>
                {collection.expanded && tasksOfCollection.length > 0
                  ? <i className='fa-solid fa-angle-up'></i>
                  : <i className='fa-solid fa-angle-down'></i>
                }

              </span>
            </div>
            {tasksOfCollection.length !== 0 && (
              <div
                className={`overflow-hidden h-0   transition-all duration-300 ${
                  collection.expanded && tasksOfCollection.length > 1
                    ? 'pb-[7.9rem]'
                    : 'pb-0'
                }  ${
                  tasksOfCollection.length === 1 && collection.expanded
                    ? 'pb-14'
                    : ''
                }`}
              >
                <div className='bg-secundary '>
                  <TaskList tasks={tasksOfCollection} />
                </div>
              </div>
            )}
            <Link
              to={`/${collection.collectionName}/${collection.id}`}
              className='w-full flex justify-center items-center gap-3 border-t rounded-b-2xl border-white border-opacity-5 p-3 font-medium bg-secundary '
            >
              Go to Collection
              <i className='fa-solid fa-arrow-right opacity-80'></i>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default DashBoadCollection
