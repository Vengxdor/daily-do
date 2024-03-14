import { useContext } from 'react'
import { tasksContext } from '../context/taskContex'
import { useCollection } from './useCollection'

export function useTasks () {
  const { tasks, setTasks } = useContext(tasksContext)
  const { setListCollections } = useCollection()

  const deleteTask = (taskId, collectionId) => {
    console.log(collectionId)
    setListCollections(prevCollections => prevCollections.map(collection => {
      if (collection.id === collectionId) {
        const updatedTasks = collection.tasks.filter(task => task.taskId !== taskId)
        return { ...collection, tasks: updatedTasks }
      }
      return collection
    }))

    // Remove the task locally
    const userData = JSON.parse(localStorage.getItem('userData'))
    if (!userData) return

    userData.collections = userData.collections.map(item => {
      if (item.id === collectionId) {
        const updatedTasks = item.tasks.filter(task => task.taskId !== taskId)
        return { ...item, tasks: updatedTasks }
      }
      return item
    })

    localStorage.setItem('userData', JSON.stringify(userData))
  }

  const toggleTaskStatus = (taskId) => {
    // use the previous states then mapped and if the tasks id mach will put the opposite of isDone or if not
    const checkedTask = tasks.map((task) =>
      task.taskId === taskId ? { ...task, isDone: !task.isDone } : task
    )
    setTasks(checkedTask)
  }

  return { tasks, setTasks, deleteTask, toggleTaskStatus }
}
