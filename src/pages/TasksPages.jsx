import React from 'react'
import { Link, useParams } from 'react-router-dom'
import TaskCreator from '../components/tasks/TaskCreator'
import TaskList from '../components/tasks/TaskList'
import { useCollection } from '../hooks/useCollection'
import AsideCollections from '../components/collection/AsideCollections'
import DesktopTaskCreator from '../components/DesktopTaskCreator'

function TasksPages () {
  const { collectionId, collectionName } = useParams()
  const { listCollections } = useCollection()

  const currentCollection = listCollections.find(
    (item) => item.id === collectionId
  )
  const cTasks = currentCollection?.tasks

  return (
    <div className='z-10 flex wide:h-[calc(100vh-4rem)] w-dvw'>
      <AsideCollections />
      <div className='wide:mx-auto w-full wide:flex wide:justify-center'>
        <section className='wide:min-w-[32rem] lg:min-w-[43rem] xl:min-w-[55rem] '>
          <header className='flex items-center p-7 gap-3 '>
            <Link
              className='fa-solid fa-chevron-left p-3 px-4 rounded-full bg-zinc-700/50 '
              to='/'
            ></Link>
            <h2 className='text-3xl font-bold'>{collectionName}</h2>
            <TaskCreator collectionId={collectionId} />
          </header>

          <main className='px-8 w-full'>
            {/* Creator of tasks "Desktop" */}
            <DesktopTaskCreator collectionId={collectionId}/>
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
