import React from 'react'
import Router from './routes/Router'
import { BrowserRouter } from 'react-router-dom'
import './styles/global.css'



function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
export default App
