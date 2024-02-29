/* eslint-disable react/prop-types */
import React from 'react'
import { useTasks } from '../../hooks/useTasks'

export function TasksInfo ({ info }) {
  const { deleteTask, toggleTaskStatus } = useTasks()
  return (
    <div className='flex justify-between'>
      <div className='flex gap-3'>
        <div className='relative flex justify-center items-center'>
          <input
            className={` p-3 rounded-xl border-2 border-primary ${
              info.isDone ? 'bg-primary' : 'bg-zinc-800'
            } appearance-none transition-colors duration-300`}
            type='checkbox'
            onChange={() => toggleTaskStatus(info.taskId)}
          />
          <i
            className={`fa-solid fa-check absolute pointer-events-none text-black ${
              info.isDone ? 'visible opacity-100' : 'opacity-0 invisible'
            }`}
          ></i>
        </div>
        <span
          className={`transition-colors duration-300 relative flex items-center ${
            info.isDone ? 'text-gray-400 ' : ''
          }`}
        >
          <span
            className={`h-0.5 bg-white absolute transition-all duration-300 ${
              info.isDone ? 'w-full ' : ' w-0 right-0'
            }`}
          ></span>
          {info.name}
        </span>
      </div>
      <button
        onClick={() => deleteTask(info.taskId)}
        className='fa-solid fa-trash text-red-500 cursor-pointer'
      ></button>
    </div>
  )
}
