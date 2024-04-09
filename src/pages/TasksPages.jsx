import React from 'react'
import { Link, useParams } from 'react-router-dom'
import TaskCreator from '../components/tasks/TaskCreator'
import TaskList from '../components/tasks/TaskList'
import { useCollection } from '../hooks/useCollection'
import AsideCollections from '../components/collection/AsideCollections'
import DesktopTaskCreator from '../components/DesktopTaskCreator'

function TasksPages () {
  const { collectionId, collectionName } = useParams()
  const { listCollections, setListCollections } = useCollection()

  const currentCollection = listCollections.find(
    (item) => item.id === collectionId
  )

  const cTasks = currentCollection?.tasks

  const handleRemoveTasks = () => {
    const updatedListCollection = [...listCollections]
    const indexToUpdate = updatedListCollection.findIndex(item => item.id === collectionId)
    const updatedCollection = {
      ...updatedListCollection[indexToUpdate],
      tasks: []
    }
    updatedListCollection[indexToUpdate] = updatedCollection
    setListCollections(updatedListCollection)
  }

  return (
    <div className='z-10 flex  w-dvw'>
      <AsideCollections />
      <div className='wide:mx-auto w-full wide:flex wide:justify-center'>
        <section className='wide:min-w-[32rem] lg:min-w-[43rem] xl:min-w-[55rem] '>
          <header className='flex justify-between w-full items-center p-7 gap-3 '>
            <div className='flex items-center gap-3'>
              <Link
                className='fa-solid fa-chevron-left p-3 px-4 rounded-full bg-zinc-700/50 '
                to='/'
              ></Link>
              <h2 className='text-3xl font-bold'>{collectionName}</h2>
            </div>
            <button onClick={handleRemoveTasks} className='p-2 rounded-xl text-xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                viewBox='0 0 24 24'
              >
                <path
                  fill='currentColor'
                  d='M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-6 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4m12 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4'
                />
              </svg>
            </button>
            <TaskCreator collectionId={collectionId} />
          </header>

          <main className='px-8 w-full'>
            {/* Creator of tasks "Desktop" */}
            <DesktopTaskCreator collectionId={collectionId} />
            <span className='opacity-80 '>Tasks - {cTasks.length}</span>
            <div className='overflow-y-auto rounded-lg mt-5 tasks-list '>
              {cTasks.length !== 0
                ? (
                <TaskList tasks={cTasks} />
                  )
                : (
                <p className='text-center'>
                  You have no tasks, Try creating one :)
                </p>
                  )}
            </div>
          </main>
        </section>
      </div>
    </div>
  )
}

export default TasksPages
