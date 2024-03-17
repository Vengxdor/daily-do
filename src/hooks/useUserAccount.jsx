import { useContext } from 'react'
import { UserAccountContext } from '../context/userContext'

export function useUserAccount () {
  const context = useContext(UserAccountContext)
  if (!context) {
    throw new Error('useUserAccount must be used within UserAccountProvider')
  }
  return context
}
