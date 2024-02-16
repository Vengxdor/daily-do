import { useContext } from 'react'
import { tasksContext } from '../context/taskContex'

export function useTasks () {
  const { tasks, setTasks } = useContext(tasksContext)
  return { tasks, setTasks }
}
