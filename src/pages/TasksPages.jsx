import React from 'react'
import { Link, useParams } from 'react-router-dom'
import TaskCreator from '../components/tasks/TaskCreator'
import TaskList from '../components/tasks/TaskList'
import { useTasks } from '../hooks/useTasks'

function TasksPages () {
  const { collectionId, collectionName } = useParams()
  const { tasks } = useTasks()
  const tasksOfCollection = tasks.filter(
    (item) => item.idCollection === collectionId
  )

  return (
    <div className='z-10 '>
      <header className='flex items-center p-7 gap-3'>
        <Link
          className='fa-solid fa-chevron-left p-3 px-4 rounded-full bg-zinc-700/50 '
          to='/Collections'
        ></Link>
        <h2 className='text-3xl font-bold'>{collectionName}</h2>
        <TaskCreator collectionId={collectionId} />
      </header>

      <main className='px-8'>
      <span className='opacity-80'>Tasks - {tasksOfCollection.length}</span>
      <div className='overflow-y-auto rounded-lg mt-5 tasks-list'>
        {tasksOfCollection.length < 1
          ? <TaskList tasks={tasksOfCollection} />
          : <p className='text-center'>You have no tasks, Try creating one :)</p>
        }
      </div>
      </main>
    </div>
  )
}

export default TasksPages
