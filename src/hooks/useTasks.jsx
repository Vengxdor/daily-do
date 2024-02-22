import { useContext } from 'react'
import { tasksContext } from '../context/taskContex'

export function useTasks () {
  const { tasks, setTasks } = useContext(tasksContext)

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.taskId !== id)
    setTasks(updatedTasks)
  }

  const toggleTaskStatus = (taskId) => {
    // use the previous states then mapped and if the tasks id mach will put the opposite of isDone or if not
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.taskId === taskId ? { ...task, isDone: !task.isDone } : task
      )
    )
  }

  return { tasks, setTasks, deleteTask, toggleTaskStatus }
}
