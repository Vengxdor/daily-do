/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import TaskCreator from './TaskCreator'
import { useCollection } from '../../hooks/useCollection'

function TaskPagesHeader ({ collectionName, collectionId }) {
  const { listCollections, setListCollections } = useCollection()

  const handleRemoveTasks = () => {
    // Clone the collection array.
    const updatedListCollection = [...listCollections]
    // Find the one that is getting targetting.
    const indexToUpdate = updatedListCollection.findIndex(
      (item) => item.id === collectionId
    )
    // Create a object with the clone and eliminating the task.
    const updatedCollection = {
      ...updatedListCollection[indexToUpdate],
      tasks: []
    }

    updatedListCollection[indexToUpdate] = updatedCollection
    setListCollections(updatedListCollection)
  }
  return (
    <header className='flex justify-between w-full items-center p-7 gap-3 '>
      <div className='flex items-center gap-3'>
        <Link
          className='fa-solid fa-chevron-left p-3 px-4 rounded-full bg-zinc-700/50 '
          to='/'
        ></Link>
        <h2 className='text-3xl font-bold'>{collectionName}</h2>
      </div>
      <div className='group relative'>
        <button className='p-2 rounded-xl text-xl group'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 24 24'
          >
            <path
              fill='currentColor'
              d='M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-6 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4m12 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4'
            />
          </svg>
        </button>
        <ul className='invisible opacity-0 p-2 group-hover:visible group-hover:opacity-100 absolute  bg-secundary transition duration-300 -left-24 rounded-xl'>
          <li
            onClick={handleRemoveTasks}
            className='p-1 hover:bg-back transition duration-300 rounded cursor-pointer'
          >
            Delete all tasks
          </li>
        </ul>
      </div>
      <TaskCreator collectionId={collectionId} />
    </header>
  )
}

export default TaskPagesHeader
