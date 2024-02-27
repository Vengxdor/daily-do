import { useContext } from 'react'
import { collectionContext } from '../context/collectionContext'

export function useCollection () {
  const { listCollections, setListCollections } = useContext(collectionContext)

  // return
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

  return {
    listCollections,
    setListCollections,
    deleteCollection,
    toggleExpanded
  }
}
