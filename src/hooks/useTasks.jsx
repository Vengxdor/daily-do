import { useCollection } from './useCollection'

export function useTasks () {
  const { setListCollections } = useCollection()

  const deleteTask = (task) => {
    setListCollections((prevCollections) =>
      prevCollections.map((collection) => {
        // Verify the current collection.
        if (collection.id === task.idCollection) {
          const updatedTasks = collection.tasks.filter(
            (item) => item.id !== task.id
          )
          return { ...collection, tasks: updatedTasks }
        }

        return collection
      })
    )
  }

  const handleDone = (task) => {
    setListCollections((prevCollection) =>
      prevCollection.map((collection) => {
        // Verify the current collection.
        if (collection.id === task.idCollection) {
          // Map every tasks to see which was clicked.
          const updatedTasks = collection.tasks.map((t) => {
            if (t.id === task.id) {
              return { ...t, isDone: !task.isDone }
            }
            return t
          })

          return { ...collection, tasks: updatedTasks }
        }
        return collection
      })
    )
  }

  return { deleteTask, handleDone }
}
