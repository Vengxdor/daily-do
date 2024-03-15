/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'
import { useUserAccount } from '../hooks/useUserAccount'

export const collectionContext = createContext()

export function CollectionProvider ({ children }) {
  const { updateUserData } = useUserAccount()
  // Get the collections from the localStorage.
  const existingCollection = JSON.parse(localStorage.getItem('userData'))

  const [listCollections, setListCollections] = useState(() => {
    if (!existingCollection) return []

    return existingCollection?.collections
  })

  useEffect(() => {
    updateUserData(listCollections)
  }, [listCollections])

  useEffect(() => {
    // if the user has an account store the collection in userData
    if (!existingCollection) return
    existingCollection.collections = listCollections
    window.localStorage.setItem('userData', JSON.stringify(existingCollection))
  }, [listCollections])

  return (
    <collectionContext.Provider value={{ listCollections, setListCollections }}>
      {children}
    </collectionContext.Provider>
  )
}
