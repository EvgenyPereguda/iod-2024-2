
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { UserProvider } from '../context/UserContext'

import LoginForm from '../components/LoginForm'
import ClockDisplay from "../components/ClockDisplay";
import MyThemeProvider from '../context/MyThemeProvider'
import ThemeSwitcher from '../components/ThemeSwitcher'

function App() {

  return (
    <>
      <UserProvider>
        <MyThemeProvider>
          <ThemeSwitcher/>
        <LoginForm/>
        <ClockDisplay/>
       </MyThemeProvider>
      </UserProvider>
    </>
  )
}

export default App
