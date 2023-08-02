import React from 'react'
import { UserProfileNavbar } from '../components/homePage-UI-components/UserProfileNavbar'
import { WelcomeUser } from '../components/homePage-UI-components/WelcomeUser'
import { EmergencyRequestsTable } from '../components/homePage-UI-components/EmergencyRequestsTable'

export const HomePage = function() {
  return (
    <React.Fragment>
      <UserProfileNavbar/>
      <WelcomeUser/>
      <EmergencyRequestsTable/>
    </React.Fragment>
  )
}