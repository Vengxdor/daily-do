import { useContext } from 'react'
import { collectionContext } from '../context/collectionContext'

export function useCollection () {
  const { listCollections, setListCollections } = useContext(collectionContext)
  return { listCollections, setListCollections }
}
