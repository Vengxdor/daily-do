import React, { useEffect, useState } from 'react'

export function CollectionModal () {
  // const storageCollections = JSON.parse(localStorage.getItem('listCollections'))
  const [listCollections, setListCollections] = useState(() => {
    const storageCollections = JSON.parse(localStorage.getItem('listCollections'))
    return storageCollections || []
  })

  const [collectionName, setCollectionName] = useState('')

  const addCollection = (e) => {
    e.preventDefault()
    if (collectionName === '') return
    const uniqueId = Date.now() + '-' + Math.floor(Math.random() * 1000)
    // push the new collection to an array with a unique Id
    setListCollections([
      ...listCollections,
      { collectionName, id: uniqueId }
    ])
    setCollectionName('')
  }

  useEffect(() => {
    window.localStorage.setItem(
      'listCollections',
      JSON.stringify(listCollections)
    )
    // console.log(storageCollections)
  }, [listCollections])

  return (
    <>
      {/* <!-- Modal toggle --> */}
      <button
        data-modal-target='crud-modal'
        data-modal-toggle='crud-modal'
        className='block text-white bg-primary p-1 rounded-full hover:bg-pink-800'
        type='button'
      >
        <i className='fa-solid fa-plus p-1'></i>
      </button>

      {/* <!-- Main modal --> */}
      <div
        id='crud-modal'
        tabIndex='-1'
        aria-hidden='true'
        className='hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'
      >
        <div className='relative p-4 w-full max-w-md max-h-full'>
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
                data-modal-toggle='crud-modal'
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
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 focus:border-primary focus-within:border-opacity-60'
                    placeholder='Type collection name'
                    required=''
                    autoComplete='off'
                  />
                </div>
              </div>
              <button
                onClick={addCollection}
                type='submit'
                data-modal-hide='crud-modal'
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
      </div>
    </>
  )
}
