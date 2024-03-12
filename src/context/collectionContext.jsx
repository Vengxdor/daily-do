/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'

export const collectionContext = createContext()

export function CollectionProvider ({ children }) {
  // get the collections from the localStorage
  const existingCollection = JSON.parse(localStorage.getItem('userData'))

  const [listCollections, setListCollections] = useState(existingCollection?.collections ?? [])

  useEffect(() => {
    if (!existingCollection) return
    existingCollection.collections = listCollections
    window.localStorage.setItem(
      'userData',
      JSON.stringify(existingCollection)
    )
  }, [listCollections])

  return (
    <collectionContext.Provider value={{ listCollections, setListCollections }}>
      {children}
    </collectionContext.Provider>
  )
}
