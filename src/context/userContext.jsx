/* eslint-disable react/prop-types */
import { doc, getDoc } from 'firebase/firestore'
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
      // get the document from firebase
      const documment = doc(db, 'Users', 'UserInfo')
      const docSnapShot = await getDoc(documment)

      if (!docSnapShot.exists()) return
      // get the user data from the document
      const data = docSnapShot.data()
      const userData = data[userAccount.uid]

      // store the data from the user
      setUserData(userData)
      localStorage.setItem('userData', JSON.stringify(userData))
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
