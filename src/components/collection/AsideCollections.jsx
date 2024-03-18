import React, { useState } from 'react'

function AsideCollections () {
  const [isAsideOpen, setAsideOpen] = useState(false)
  return (
    <aside className='hidden wide:flex  top-0 h-full '>
    <div className={` bg-secundary h-full sticky transition-all duration-300  ${isAsideOpen ? 'w-40  opacity-100' : 'w-1 opacity-0 select-none pointer-events-none'}`}>
        <h3 className='my-6 text-center text-xl'>Collections</h3>
        <ul className='grid gap-3 '>
          <li className='p-4 ml-2 rounded-tl-xl rounded-bl-xl bg-black/30'>hello</li>
          <li className='p-4 ml-2 rounded-tl-xl rounded-bl-xl bg-black/30'>hello</li>
          <li className='p-4 ml-2 rounded-tl-xl rounded-bl-xl bg-black/30'>hello</li>
          <li className='p-4 ml-2 rounded-tl-xl rounded-bl-xl bg-black/30'>hello</li>
        </ul>
      </div>
      <button
        onClick={() => setAsideOpen((prev) => !prev)}
        className='bg-secundary align-top h-10 w-10 flex justify-center items-center m-3 border border-hover rounded-lg'
      >
        {isAsideOpen
          ? <i className='fa-solid fa-angle-left'></i>
          : <i className='fa-solid fa-angle-right'></i>
        }
      </button>
    </aside>
  )
}

export default AsideCollections
