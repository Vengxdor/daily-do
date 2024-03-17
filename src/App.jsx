import React from 'react'
import { CollectionProvider } from './context/collectionContext'
import LandingPage from './pages/LandingPage'
import Collections from './Collections'
import { useUserAccount } from './hooks/useUserAccount'

function App () {
  const { isAccountCreated } = useUserAccount()
  console.log(isAccountCreated)

  return (
    <>
      <CollectionProvider>
        {isAccountCreated ? <Collections /> : <LandingPage />}
      </CollectionProvider>
    </>
  )
}

export default App
