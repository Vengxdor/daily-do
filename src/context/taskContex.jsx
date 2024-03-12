/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'

export const tasksContext = createContext()

export function TasksProvider ({ children }) {
  // get the tasks from the localStorage
  const existingTasks = JSON.parse(localStorage.getItem('userData'))

  const [tasks, setTasks] = useState(existingTasks?.tasks ?? [])
  useEffect(() => {
    if (!existingTasks) return
    existingTasks.tasks = tasks
    window.localStorage.setItem(
      'userData',
      JSON.stringify(existingTasks)
    )
  }, [tasks])
  return (
    <tasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </tasksContext.Provider>
  )
}
