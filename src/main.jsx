import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainApp } from './useContext'
import { BrowserRouter } from 'react-router-dom';
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>  
  </React.StrictMode>
)
