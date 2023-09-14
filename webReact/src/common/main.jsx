import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Routing from './Routing'
import Navbar from '../components/Navbar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Routing />
  </React.StrictMode>,
)
