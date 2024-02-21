import { useContext } from 'react'
import { tasksContext } from '../context/taskContex'

export function useTasks () {
  const { tasks, setTasks } = useContext(tasksContext)

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId)
    setTasks(updatedTasks)
  }
  return { tasks, setTasks, deleteTask }
}
