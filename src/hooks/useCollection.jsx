import { useContext } from 'react'
import { collectionContext } from '../context/collectionContext'

export function useCollection () {
  const { listCollections, setListCollections } = useContext(collectionContext)

  // return
  const deleteCollection = (collectionId) => {
    const updatedCollection = listCollections.filter(collection => collection.id !== collectionId)
    setListCollections(updatedCollection)
  }

  return { listCollections, setListCollections, deleteCollection }
}
