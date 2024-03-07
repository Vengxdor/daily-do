/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from 'react'

export const UserAccountContext = createContext()

export function UserAccountProvider ({ children }) {
  const [userAccount, setUserAccount] = useState(() => {
    const storageUser = JSON.parse(localStorage.getItem('userAccount'))
    return storageUser || null
  })

  useEffect(() => {
    window.localStorage.setItem('userAccount', JSON.stringify(userAccount))
  }, [userAccount])
  return (
    <UserAccountContext.Provider value={{ userAccount, setUserAccount }}>
      {children}
    </UserAccountContext.Provider>
  )
}
