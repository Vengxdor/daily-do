/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'

export const collectionContext = createContext()

export function CollectionProvider ({ children }) {
  // get the collections from the localStorage
  const existingCollection = JSON.parse(localStorage.getItem('userData'))
  const localCollection = JSON.parse(localStorage.getItem('collections'))

  const [listCollections, setListCollections] = useState(() => {
    // if there's a user load the user information
    if (existingCollection) {
      return existingCollection?.collections
    }
    // if there's not a user and o local collection return an empty arr
    if (!localCollection) return []
    return localCollection
  })

  useEffect(() => {
    // store the collection locally if the user don't have an account
    window.localStorage.setItem('collections', JSON.stringify(listCollections))

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
