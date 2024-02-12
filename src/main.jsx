import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MobileApp from './MobileApp.jsx'

const screenWidth = window.innerWidth
const breakpoint = 600
const isMobile = screenWidth < breakpoint

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {
      isMobile
        ? <MobileApp />
        : <App />
    }
    {/* <App /> */}
  </React.StrictMode>
)
