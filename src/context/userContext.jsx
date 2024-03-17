/* eslint-disable react/prop-types */
import { collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore'
import React, { createContext, useEffect, useState } from 'react'
import { db } from '../firebase'

export const UserAccountContext = createContext()

export function UserAccountProvider ({ children }) {
  const [userAccount, setUserAccount] = useState(() => {
    const storageUser = JSON.parse(localStorage.getItem('userAccount'))
    return storageUser || null
  })

  const storageData = JSON.parse(localStorage.getItem('userData'))
  const [userData, setUserData] = useState(() => {
    return storageData || null
  })

  const [isAccountCreated, setAccountCreated] = useState(
    storageData?.userActive ?? false
  )

  // Storage when the account is created.
  useEffect(() => {
    if (!storageData) return
    storageData.userActive = isAccountCreated
    localStorage.setItem('userData', JSON.stringify(isAccountCreated))
  }, [isAccountCreated])

  useEffect(() => {
    if (!userAccount) return
    const getUserData = async () => {
      try {
        // Create a query to find the document with the given UID.
        const q = query(
          collection(db, 'Users'),
          where('uid', '==', userAccount.uid)
        )

        const querySnapshot = await getDocs(q)
        // Iterate to find the user and set the data to it.
        let userQuery = null
        querySnapshot.forEach((snap) => {
          userQuery = snap.data()
        })

        if (!userQuery) return
        // Store the user data into the local storage.
        setUserData(userQuery)
        localStorage.setItem('userData', JSON.stringify(userQuery))
      } catch (error) {
        console.error(error)
      }
    }
    getUserData()
    // Store the userAccount in the loaclStorage every time it changes.
    localStorage.setItem('userAccount', JSON.stringify(userAccount))
  }, [userAccount])

  useEffect(() => {
    window.localStorage.setItem('userData', JSON.stringify(userData))
  }, [userData])

  const updateUserData = async (listCollection) => {
    if (!userAccount) return
    try {
      // Reference the current user document.
      const UserRef = doc(db, `Users/${userAccount.uid}`)

      const updatedUserData = {
        ...userData,
        collections: listCollection || userData.collections,
        uid: userData.uid,
        userActive: true,
        username: userData.username
      }
      // Update the documet with the marged data.
      await updateDoc(UserRef, updatedUserData)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <UserAccountContext.Provider
      value={{
        userAccount,
        setUserAccount,
        userData,
        setUserData,
        isAccountCreated,
        setAccountCreated,
        updateUserData
      }}
    >
      {children}
    </UserAccountContext.Provider>
  )
}
