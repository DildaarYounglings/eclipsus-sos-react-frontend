import React from 'react'
import { MapPageBody } from '../components/mapPage-UI-components/MapPageBody'
import { MapPageProfileNavbar } from '../components/mapPage-UI-components/MapPageProfileNavbar'

export const MapPage = function() {
  return (
    <div>
      <MapPageProfileNavbar/>
      <MapPageBody/>
    </div>
  )
}