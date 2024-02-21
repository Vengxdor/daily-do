import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Task from '../components/Task'
import { useTasks } from '../hooks/useTasks'
import { TasksInfo } from '../components/TasksInfo'

function TasksPages () {
  const { collectionId, collectionName } = useParams()
  const { tasks, deleteTask } = useTasks()
  const tasksOfCollection = tasks.filter((item) => item.id === collectionId)

  return (
    <div className='z-10 '>
      <header className='flex items-center p-7 gap-3'>
        <Link
          className='fa-solid fa-chevron-left p-3 px-4 rounded-full bg-zinc-700/50 '
          to='/'
        ></Link>
        <h2 className='text-3xl font-bold'>{collectionName}</h2>
        <Task collectionId={collectionId} />
      </header>

      <main className='px-8'>
        <span className='opacity-80'>Tasks - {tasksOfCollection.length}</span>
        {tasksOfCollection
          ? (
            <ul className='my-4 flex flex-col gap-2 '>
            {tasksOfCollection.map((task, index) => (
              <li className='p-4 rounded-xl bg-slate-600' key={index}>
                <TasksInfo info={task} deleteTask={deleteTask} />
              </li>
            ))}
          </ul>
            )
          : (
            <p className='text-red-600 text-center m-3'>
              Try Creating a tasks :)
            </p>
            )}
      </main>
    </div>
  )
}

export default TasksPages
