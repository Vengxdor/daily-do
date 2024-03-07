/* eslint-disable react/prop-types */
import React from 'react'

function CreatedDialog ({ children }) {
  return (
    <div className='absolute left-0 right-0 flex justify-center mt-5 pointer-events-none'>
      <div className='relative h-24 w-52'>
        <div className='w-full h-full bg-secundary rounded-xl flex justify-center items-center px-5 created-dialog'>
          <span>{children}</span>
        </div>
      </div>
    </div>
  )
}

export default CreatedDialog
