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
    // Storage the collections to firebase every time it changes.
    updateUserData(listCollections)

    // If the user has an account store the collection in userData.
    if (!existingCollection) return
    existingCollection.collections = listCollections
    window.localStorage.setItem('userData', JSON.stringify(existingCollection))
  }, [listCollections])

  const deleteCollection = (collectionId) => {
    const updatedCollection = listCollections.filter(
      (collection) => collection.id !== collectionId
    )
    setListCollections(updatedCollection)
  }

  const toggleExpanded = (collectionId) => {
    const expandedCollection = listCollections.map((collection) =>
      collection.id === collectionId
        ? { ...collection, expanded: !collection.expanded }
        : collection
    )
    setListCollections(expandedCollection)
  }

  return (
    <collectionContext.Provider
      value={{
        listCollections,
        setListCollections,
        deleteCollection,
        toggleExpanded
      }}
    >
      {children}
    </collectionContext.Provider>
  )
}
