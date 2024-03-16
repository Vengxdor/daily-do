import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CollectionProvider } from './context/collectionContext.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { UserAccountProvider } from './context/userContext.jsx'
import LandingPage from './pages/LandingPage.jsx'

const isAccountCreated = JSON.parse(localStorage.getItem('userData'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <UserAccountProvider>
      <CollectionProvider>
        {isAccountCreated ? <App /> : <LandingPage />}
      </CollectionProvider>
    </UserAccountProvider>
  </Router>
)
