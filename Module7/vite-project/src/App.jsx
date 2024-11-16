
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { UserProvider } from '../context/UserContext'

import LoginForm from '../components/LoginForm'
import ClockDisplay from "../components/ClockDisplay";
import MyThemeProvider from '../context/MyThemeProvider'
import ThemeSwitcher from '../components/ThemeSwitcher'
import NavBar from '../components/NavBar'

function App() {

  return (
    <>
      <UserProvider>
        <MyThemeProvider>
          <NavBar/>
          {/* <ThemeSwitcher/>
        <LoginForm/>
        <ClockDisplay/> */}
       </MyThemeProvider>
      </UserProvider>
    </>
  )
}

export default App
