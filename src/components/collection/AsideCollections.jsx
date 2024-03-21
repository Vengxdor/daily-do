import React, { useEffect, useState } from 'react'
import ItemsAside from '../ItemsAside'

function AsideCollections () {
  const [isAsideOpen, setAsideOpen] = useState(() => {
    const storeOpen = JSON.parse(localStorage.getItem('asideOpen'))
    if (JSON.stringify(storeOpen) === 'false') return false
    return storeOpen || true
  })

  useEffect(() => {
    localStorage.setItem('asideOpen', JSON.stringify(isAsideOpen))
  }, [isAsideOpen])

  return (
    <aside className='hidden wide:flex items-start overflow-y-hidden'>
      <div
        className={` bg-secundary h-full sticky wide:h-[calc(100vh-4rem)]  transition-all duration-300 ${
          isAsideOpen
            ? 'w-56  opacity-100'
            : 'w-1 opacity-0 select-none pointer-events-none'
        }`}
      >
        <h3 className='mb-6 text-center text-xl border-b border-hover py-6'>
          Collections
        </h3>
        <ItemsAside />
      </div>
      <button
        onClick={() => setAsideOpen((prev) => !prev)}
        className='bg-secundary align-top p-3 flex justify-center items-center m-3 border border-hover rounded-lg'
      >
        {isAsideOpen
          ? (
          <i className='fa-solid fa-angle-left'></i>
            )
          : (
          <i className='fa-solid fa-angle-right'></i>
            )}
      </button>
    </aside>
  )
}

export default AsideCollections
