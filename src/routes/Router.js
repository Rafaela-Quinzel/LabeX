import React from "react"
import { Route, Switch } from "react-router-dom"
import HomePage from '../screens/public/home/HomePage'
import AdmLoginPage from '../screens/public/login/LoginPage'
import ApplicationFormPage from '../screens/public/formPage/ApplicationFormPage'
import ListTripsPage from '../screens/public/trips/ListTripsPage'
import AdmListTrips from '../screens/private/listTrips/AdmListTrips'
import AdmTripDetailsPage from '../screens/private/tripDetail/AdmTripDetailsPage'
import AdmCreateTripPage from '../screens/private/createTrips/AdmCreateTripPage'
import AdmSignupPage from '../screens/private/signup/AdmSignupPage'

function Router() {
   return (
      <Switch>
         <Route exact path="/">
            <HomePage />
         </Route>
         <Route exact path="/login">
            <AdmLoginPage />
         </Route>
         <Route exact path="/inscricao/:id/apply">
            <ApplicationFormPage />
         </Route>
         <Route exact path="/viagens">
            <ListTripsPage />
         </Route>
         <Route exact path="/viagens_adm">
            <AdmListTrips />
         </Route>
         <Route exact path="/cadastrar_login">
            <AdmSignupPage />
         </Route>
         <Route exact path="/detalhes_da_viagem/:id">
            <AdmTripDetailsPage />
         </Route>
         <Route exact path="/criar_viagens">
            <AdmCreateTripPage />
         </Route>
      </Switch>
   )
}
export default Router
