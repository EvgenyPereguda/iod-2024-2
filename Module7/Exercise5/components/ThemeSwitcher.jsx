
import { useContext } from "react";
import { MyThemeContext, themes } from "../context/MyThemeProvider";


function ThemeSwitcher(){

    const {theme, setTheme, darkMode} = useContext(MyThemeContext);

    return (
        <button 
        style={{border: '0.1em solid blue', background: theme.background, color: theme.foreground}}  
        onClick={() => setTheme(darkMode ? themes.light : themes.dark)}>
                Switch theme to {darkMode ? 'light': 'dark'}
        </button>
    )
}

export default ThemeSwitcher;