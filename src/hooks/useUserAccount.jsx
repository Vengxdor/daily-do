import { useContext } from 'react'
import { UserAccountContext } from '../context/userContext'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'

export function useUserAccount () {
  const {
    userAccount,
    setUserAccount,
    userData,
    setUserData,
    isAccountCreated,
    setAccountCreated
  } = useContext(UserAccountContext)

  const updateUserData = async (listCollection) => {
    if (!userAccount) return
    try {
      // reference the current user document
      const UserRef = doc(db, `Users/${userAccount.uid}`)

      const updatedUserData = {
        ...userData,
        collections: listCollection || userData.collections,
        uid: userData.uid,
        userActive: true,
        username: userData.username
      }
      // update the documet with the marged data
      await updateDoc(UserRef, updatedUserData)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    userAccount,
    setUserAccount,
    userData,
    setUserData,
    updateUserData,
    isAccountCreated,
    setAccountCreated
  }
}
