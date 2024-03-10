import { useContext } from 'react'
import { collectionContext } from '../context/collectionContext'
import { useUserAccount } from './useUserAccount'

export function useCollection () {
  const { listCollections, setListCollections } = useContext(collectionContext)
  const { updateUserData } = useUserAccount()

  // return
  const deleteCollection = (collectionId) => {
    const updatedCollection = listCollections.filter(
      (collection) => collection.id !== collectionId
    )
    setListCollections(updatedCollection)
    updateUserData(updatedCollection)
  }

  const toggleExpanded = (collectionId) => {
    const expandedCollection = listCollections.map((collection) =>
      collection.id === collectionId
        ? { ...collection, expanded: !collection.expanded }
        : collection
    )
    setListCollections(expandedCollection)
  }

  return {
    listCollections,
    setListCollections,
    deleteCollection,
    toggleExpanded
  }
}
