import React, { useState } from 'react'
import { useCollection } from '../hooks/useCollection'

export function CollectionModal () {
  const { listCollections, setListCollections } = useCollection()
  const [isModalOpen, setModalOpen] = useState(false)
  const [collectionName, setCollectionName] = useState('')

  const handleCollection = (e) => {
    e.preventDefault()
    if (collectionName === '') return
    const uniqueId = Date.now() + '-' + Math.floor(Math.random() * 1000)
    // push the new collection to an array with a unique Id
    setListCollections([...listCollections, { collectionName, id: uniqueId }])
    setCollectionName('')
    setModalOpen(false)
  }

  return (
    <>
      {/* <!-- Modal toggle btn --> */}
      <button
        className='fa-plus fa-solid block text-white py-8 rounded-xl border  w-full hover:bg-secundary transition-colors duration-300'
        type='button'
        onClick={() => setModalOpen(!isModalOpen)}
      >
      </button>

      {/* <!-- Main modal --> */}
      {isModalOpen && (
        <section
          tabIndex='-1'
          className=' flex overflow-y-hidden overflow-x-hidden fixed top-0 right-0 left-0  justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'
        >
          <div className='relative p-4 w-full max-w-md max-h-full z-50'>
            {/* <!-- Modal content --> */}
            <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
              {/*  Modal header  */}
              <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                  Create New Collection
                </h3>
                <button
                  type='button'
                  className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
                  onClick={() => setModalOpen(false)}
                >
                  <svg
                    className='w-3 h-3'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 14'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                    />
                  </svg>
                  <span className='sr-only'>Close modal</span>
                </button>
              </div>
              <form className='p-4 md:p-5'>
                <div className='grid gap-4 mb-4 grid-cols-2'>
                  <div className='col-span-2'>
                    <label
                      htmlFor='name'
                      className='block mb-2 text-sm font-medium  dark:text-white'
                    >
                      Name
                    </label>
                    <input
                      value={collectionName}
                      onChange={(e) => setCollectionName(e.target.value)}
                      type='text'
                      name='name'
                      id='name'
                      className=' border text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary block w-full p-2.5 bg-gray-600 border-gray-500 outline-none'
                      placeholder='Type collection name'
                      required=''
                      autoComplete='off'
                    />
                  </div>
                </div>
                <button
                  onClick={handleCollection}
                  type='submit'
                  className='text-white inline-flex items-center bg-primary hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center  '
                >
                  <svg
                    className='me-1 -ms-1 w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  Add new collection
                </button>
              </form>
            </div>
          </div>

          {/* background Opacity */}
          <div onClick={() => setModalOpen(false)} className='bg-black/20 w-screen h-screen inset-0 absolute z-10'></div>
        </section>
      )}
    </>
  )
}
