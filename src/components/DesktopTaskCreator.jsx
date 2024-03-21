/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { useCollection } from '../hooks/useCollection'

function DesktopTaskCreator ({ collectionId }) {
  const { setListCollections } = useCollection()
  const [newTasks, setNewTask] = useState('')

  const handleTask = (e) => {
    e.preventDefault()
    if (newTasks.trim() === '') return

    const uniqueId = Date.now() + Math.floor(Math.random() * 1000)

    setListCollections((prevCollections) =>
      prevCollections.map((collection) => {
        if (collection.id === collectionId) {
          return {
            ...collection,
            tasks: [
              ...collection.tasks,
              {
                name: newTasks,
                isDone: false,
                id: uniqueId,
                idCollection: collectionId
              }
            ]
          }
        }
        return collection
      })
    )

    // reset
    setNewTask('')
  }
  return (
    <form
      onSubmit={handleTask}
      className='hidden wide:flex items-center border border-hover/50 rounded-xl mt-3 mb-5'
    >
      <button
        className='fa-solid fa-plus p-2 m-2 bg-primary rounded-lg text-black'
        type='submit'
      ></button>
      <input
        placeholder='Add your tasks...'
        className='p-3 w-full bg-transparent outline-none'
        type='text'
        value={newTasks}
        onChange={(e) => setNewTask(e.target.value)}
      />
    </form>
  )
}

export default DesktopTaskCreator
