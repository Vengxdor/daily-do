import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Task from '../components/Task'
import { useTasks } from '../hooks/useTasks'

function CollectionPage () {
  const { collectionId, collectionName } = useParams()
  const { tasks } = useTasks()

  return (
    <>
      <header className='flex items-center p-7 gap-3'>
        <Link
          className='fa-solid fa-chevron-left p-3 px-4 rounded-full bg-zinc-700/50'
          to='/'
        ></Link>
        <h2 className='text-3xl font-bold'>{collectionName}</h2>
        <Task collectionId={collectionId} />
      </header>

      <main>
        <ul>
          {tasks
            .filter((item) => item.id === collectionId)
            .map((task, index) => (
              <li key={index}>
                <p>{task.name}</p>
              </li>
            ))}
        </ul>
      </main>
    </>
  )
}

export default CollectionPage
