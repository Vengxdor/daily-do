/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'

export const collectionContext = createContext()

export function CollectionProvider ({ children }) {
  const [listCollections, setListCollections] = useState(() => {
    const storageCollections = JSON.parse(localStorage.getItem('listCollections'))
    return storageCollections || []
  })
  useEffect(() => {
    window.localStorage.setItem(
      'listCollections',
      JSON.stringify(listCollections)
    )
  }, [listCollections])
  return (
    <collectionContext.Provider value={{ listCollections, setListCollections }}>
      {children}
    </collectionContext.Provider>
  )
}
