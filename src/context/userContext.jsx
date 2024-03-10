/* eslint-disable react/prop-types */
import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { createContext, useEffect, useState } from 'react'
import { db } from '../firebase'

export const UserAccountContext = createContext()

export function UserAccountProvider ({ children }) {
  const [userAccount, setUserAccount] = useState(() => {
    const storageUser = JSON.parse(localStorage.getItem('userAccount'))
    return storageUser || null
  })

  const [userData, setUserData] = useState(() => {
    const storageData = JSON.parse(localStorage.getItem('userData'))
    return storageData || null
  })

  useEffect(() => {
    const getUserData = async () => {
      if (!userAccount) return

      try {
        // Create a query to find the document with the given UID
        const q = query(
          collection(db, 'Users'),
          where('uid', '==', userAccount.uid)
        )

        const querySnapshot = await getDocs(q)
        // iterate to find the user and set the data to it
        let userQuery = null
        querySnapshot.forEach(snap => {
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
  }, [userAccount])

  useEffect(() => {
    window.localStorage.setItem('userAccount', JSON.stringify(userAccount))
  }, [userAccount])

  return (
    <UserAccountContext.Provider
      value={{ userAccount, setUserAccount, userData, setUserData }}
    >
      {children}
    </UserAccountContext.Provider>
  )
}
