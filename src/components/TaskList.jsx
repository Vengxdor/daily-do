/* eslint-disable react/prop-types */
import React from 'react'
import { TasksInfo } from '../components/TasksInfo'

function TaskList ({ tasks }) {
  return (
    <>
      {tasks
        ? (
        <ul className=' flex flex-col gap-2 '>
          {tasks.map((task, index) => (
            <li className='p-4 rounded-xl bg-secundary' key={index}>
              <TasksInfo info={task} />
            </li>
          ))}
        </ul>
          )
        : (
        <p className='text-red-600 text-center m-3'>Try Creating a tasks :)</p>
          )}
    </>
  )
}

export default TaskList
