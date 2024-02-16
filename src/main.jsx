import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MobileApp from './MobileApp.jsx'
import { CollectionProvider } from './context/collectionContext.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { TasksProvider } from './context/taskContex.jsx'

const screenWidth = window.innerWidth
const breakpoint = 600
const isMobile = screenWidth < breakpoint

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <CollectionProvider>
      <TasksProvider>
        {isMobile ? <MobileApp /> : <App />}
        {/* <App /> */}
      </TasksProvider>
    </CollectionProvider>
  </Router>
)
