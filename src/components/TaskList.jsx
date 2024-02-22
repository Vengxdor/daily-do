/* eslint-disable react/prop-types */
import React from 'react'
import { TasksInfo } from '../components/TasksInfo'
import { useTasks } from '../hooks/useTasks'

function TaskList ({ collectionId }) {
  const { tasks } = useTasks()
  const tasksOfCollection = tasks.filter((item) => item.idCollection === collectionId)

  return (
    <>
    <span className='opacity-80'>Tasks - {tasksOfCollection.length}</span>
        {tasksOfCollection
          ? (
            <ul className='my-4 flex flex-col gap-2 '>
            {tasksOfCollection.map((task, index) => (
              <li className='p-4 rounded-xl bg-zinc-700' key={index}>
                <TasksInfo info={task} />
              </li>
            ))}
          </ul>
            )
          : (
            <p className='text-red-600 text-center m-3'>
              Try Creating a tasks :)
            </p>
            )}
    </>
  )
}

export default TaskList
