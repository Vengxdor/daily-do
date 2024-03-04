/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react'

export const UserAccountContext = createContext()

export function UserAccountProvider ({ children }) {
  const [userAccount, setUserAccount] = useState(null)
  return (
  <UserAccountContext.Provider value={{ userAccount, setUserAccount }}>
    {children}
  </UserAccountContext.Provider>
  )
}
