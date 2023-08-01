import React,{useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { HomePage } from './pages/HomePage'
import { MainSideNavbar } from './components/homePage-UI-components/MainSideNavbar'
import { UserProfileNavbar } from './components/homePage-UI-components/UserProfileNavbar'

function App() {
  const [UI, set_UI] = useState("/Dashboard");
  return (
    <React.Fragment>
      <div>
        <MainSideNavbar UI_state={[UI,set_UI]}/>
        {UI === "/Dashboard" ? <><UserProfileNavbar/></> : ""}
      </div>
    </React.Fragment>
  )
}

export default App
