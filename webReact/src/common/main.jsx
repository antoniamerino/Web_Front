import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Routing from './Routing'
import Navbar from '../components/Navbar'
import AuthProvider from '../auth/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Navbar />
      <Routing />
    </AuthProvider>
  </React.StrictMode>,
)
