import React, { useEffect, useState } from 'react'
import ItemsAside from '../ItemsAside'

function AsideCollections () {
  const [isAsideOpen, setAsideOpen] = useState(() => {
    const storeOpen = JSON.parse(localStorage.getItem('asideOpen'))
    if (!storeOpen) return false
    return storeOpen || true
  })

  useEffect(() => {
    localStorage.setItem('asideOpen', JSON.stringify(isAsideOpen))
  }, [isAsideOpen])

  return (
    <aside className='hidden wide:flex  top-0 h-full '>
    <div className={` bg-secundary h-full sticky transition-all duration-300  ${isAsideOpen ? 'w-40  opacity-100' : 'w-1 opacity-0 select-none pointer-events-none'}`}>
        <h3 className='my-6 text-center text-xl'>Collections</h3>
        <ItemsAside />
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
