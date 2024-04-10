import React from 'react'
import { useParams } from 'react-router-dom'
import TaskList from '../components/tasks/TaskList'
import { useCollection } from '../hooks/useCollection'
import AsideCollections from '../components/collection/AsideCollections'
import DesktopTaskCreator from '../components/DesktopTaskCreator'
import TaskPagesHeader from '../components/tasks/TaskPagesHeader'

function TasksPages () {
  const { collectionId, collectionName } = useParams()
  const { listCollections } = useCollection()

  const currentCollection = listCollections.find(
    (item) => item.id === collectionId
  )

  const cTasks = currentCollection?.tasks

  return (
    <div className='z-10 flex  w-dvw'>
      <AsideCollections />
      <div className='wide:mx-auto w-full wide:flex wide:justify-center'>
        <section className='wide:min-w-[32rem] lg:min-w-[43rem] xl:min-w-[55rem] '>
          <TaskPagesHeader collectionName={collectionName} collectionId={collectionId}/>

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
