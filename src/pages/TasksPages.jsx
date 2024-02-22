import React from 'react'
import { Link, useParams } from 'react-router-dom'
import TaskCreator from '../components/TaskCreator'
import TaskList from '../components/TaskList'

function TasksPages () {
  const { collectionId, collectionName } = useParams()

  return (
    <div className='z-10 '>
      <header className='flex items-center p-7 gap-3'>
        <Link
          className='fa-solid fa-chevron-left p-3 px-4 rounded-full bg-zinc-700/50 '
          to='/'
        ></Link>
        <h2 className='text-3xl font-bold'>{collectionName}</h2>
        <TaskCreator collectionId={collectionId} />
      </header>

      <main className='px-8'>
        <TaskList collectionId={collectionId} />
      </main>
    </div>
  )
}

export default TasksPages
