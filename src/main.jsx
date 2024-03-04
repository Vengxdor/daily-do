import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import MobileApp from './MobileApp.jsx'
import { CollectionProvider } from './context/collectionContext.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { TasksProvider } from './context/taskContex.jsx'
import Landing from './pages/Landing.jsx'
import { UserAccountProvider } from './context/userContext.jsx'

const yes = false

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <UserAccountProvider>
      <CollectionProvider>
        <TasksProvider>
          {yes ? <Landing /> : <MobileApp />}
          {/* <App /> */}
        </TasksProvider>
      </CollectionProvider>
    </UserAccountProvider>
  </Router>
)
