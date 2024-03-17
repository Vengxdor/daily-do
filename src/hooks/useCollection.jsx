import { useContext } from 'react'
import { collectionContext } from '../context/collectionContext'

export function useCollection () {
  const context = useContext(collectionContext)

  if (!context) {
    throw new Error('useCollecition must be used within a collectionProvider')
  }

  return context
}
