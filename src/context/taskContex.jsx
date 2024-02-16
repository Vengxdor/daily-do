/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'

export const tasksContext = createContext()

export function TasksProvider ({ children }) {
  const [tasks, setTasks] = useState(() => {
    const storageTasks = JSON.parse(localStorage.getItem('tasks'))
    return storageTasks || []
  })
  useEffect(() => {
    window.localStorage.setItem(
      'tasks',
      JSON.stringify(tasks)
    )
  }, [tasks])
  return (
    <tasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </tasksContext.Provider>
  )
}
