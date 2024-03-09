import { useContext } from 'react'
import { UserAccountContext } from '../context/userContext'

export function useUserAccount () {
  const { userAccount, setUserAccount, userData, setUserData } = useContext(UserAccountContext)

  // const updateData = (listCollection, listTasks) => {

  // }

  return { userAccount, setUserAccount, userData, setUserData }
}
