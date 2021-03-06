import React from 'react'
import Router from './routes/Router'
import { BrowserRouter, Route } from 'react-router-dom'
import './styles/global.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'



function App() {
  return (
    <BrowserRouter>
      <Route exact path={[
        '/',
        '/login',
        '/viagens',
        '/inscricao/:id/apply',
        '/viagens_adm',
        '/cadastrar_login',
        '/detalhes_da_viagem/:id',
        '/criar_viagens'
      ]}>
        <Header/>
      </Route >
      <Router />
      <Footer/>
    </BrowserRouter>
  )
}
export default App
