import { useContext } from 'react'
import { UserAccountContext } from '../context/userContext'

export function useUserAccount () {
  const { userAccount, setUserAccount } = useContext(UserAccountContext)

  return { userAccount, setUserAccount }
}
