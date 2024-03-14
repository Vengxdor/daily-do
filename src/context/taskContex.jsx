/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react'

export const tasksContext = createContext()

export function TasksProvider ({ children }) {
  // get the tasks from the localStorage
  const existingTasks = JSON.parse(localStorage.getItem('userData'))

  const [tasks, setTasks] = useState(existingTasks?.tasks ?? [])
  return (
    <tasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </tasksContext.Provider>
  )
}
