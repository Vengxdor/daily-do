import React from 'react'
import { CollectionProvider } from './context/collectionContext'
import LandingPage from './pages/LandingPage'
import DailyDo from './DailyDo'
import { useUserAccount } from './hooks/useUserAccount'

function App () {
  const { userAccount } = useUserAccount()

  return (
    <>
      <CollectionProvider>
        {userAccount ? <DailyDo /> : <LandingPage />}
      </CollectionProvider>
    </>
  )
}

export default App
