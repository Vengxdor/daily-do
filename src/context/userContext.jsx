/* eslint-disable react/prop-types */
import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { createContext, useEffect, useState } from 'react'
import { db } from '../firebase'

export const UserAccountContext = createContext()

export function UserAccountProvider ({ children }) {
  const storageUser = JSON.parse(localStorage.getItem('userAccount'))
  const [userAccount, setUserAccount] = useState(() => {
    return storageUser || null
  })

  const storageData = JSON.parse(localStorage.getItem('userData'))
  const [userData, setUserData] = useState(() => {
    return storageData || null
  })

  const [isAccountCreated, setAccountCreated] = useState(
    storageData?.userActive ?? false
  )
  useEffect(() => {
    if (!storageData) return
    storageData.userActive = isAccountCreated
    localStorage.setItem('userData', JSON.stringify(isAccountCreated))
  }, [isAccountCreated])

  useEffect(() => {
    if (!userAccount) return
    const getUserData = async () => {
      try {
        // Create a query to find the document with the given UID
        const q = query(
          collection(db, 'Users'),
          where('uid', '==', userAccount.uid)
        )

        const querySnapshot = await getDocs(q)
        // iterate to find the user and set the data to it
        let userQuery = null
        querySnapshot.forEach((snap) => {
          userQuery = snap.data()
        })

        if (!userQuery) return
        // store the user data into the local storage
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

  return (
    <UserAccountContext.Provider
      value={{
        userAccount,
        setUserAccount,
        userData,
        setUserData,
        isAccountCreated,
        setAccountCreated
      }}
    >
      {children}
    </UserAccountContext.Provider>
  )
}
