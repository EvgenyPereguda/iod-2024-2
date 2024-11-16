import './App.css'
import MyThemeProvider from '../context/MyThemeProvider'
import NavBar from '../components/NavBar'

function App() {

  return (
    <>
        <MyThemeProvider>
          <NavBar/>
       </MyThemeProvider>
    </>
  )
}

export default App
