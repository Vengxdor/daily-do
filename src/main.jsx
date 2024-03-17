import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { UserAccountProvider } from './context/userContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <UserAccountProvider>
      <App />
    </UserAccountProvider>
  </Router>
)
