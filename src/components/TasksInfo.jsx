/* eslint-disable react/prop-types */
import React from 'react'

export function TasksInfo ({ info, deleteTask }) {
  // const cosa = deleteTask()
  return (
    <div className='flex justify-between'>
      <div className='flex gap-3'>
        <div className='relative flex justify-center items-center'>
          <input
            className='bg-zinc-900 p-3 rounded-xl border-2 border-primary checked:bg-primary appearance-none transition-colors duration-300'
            type='checkbox'
          />
          <i
            className={
              `fa-solid fa-check absolute pointer-events-none ${info.isDone ? 'visible opacity-100' : 'opacity-0 invisible'}`
            }
          ></i>
        </div>
        <span>{info.name}</span>
      </div>
      <button onClick={() => deleteTask(info.id)} className='fa-solid fa-trash text-red-500 cursor-pointer'></button>
    </div>
  )
}
