
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { UserProvider } from '../context/UserContext'
import MyThemeProvider from '../context/MyThemeProvider'

import LoginForm from '../components/LoginForm'
import ClockDisplay from "../components/ClockDisplay";
import ThemeSwitcher from '../components/ThemeSwitcher'
import NavBar from '../components/NavBar'
import BasicGrid from '../components/BasicGrid'
import MUIForm from '../components/MUIForm'

function App() {

  return (
    <>
    <BasicGrid/>
    <MUIForm/>
          {/* <NavBar/> */}
          {/* <ThemeSwitcher/>
        <LoginForm/>
        <ClockDisplay/> */}
    </>
  )
}

export default App
