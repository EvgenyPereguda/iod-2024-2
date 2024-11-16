
import LoginForm from "../components/LoginForm"
import Box from '@mui/material/Box';
import { useState, useEffect, useContext } from "react";
import { MyThemeContext } from "../context/MyThemeProvider";

export default function LoginPage() { 

    const {theme} = useContext(MyThemeContext);
    
    return (
    <Box className="LoginPage" style={{background: theme.background, color: theme.foreground}}>
    <h1>Login</h1>
    <LoginForm/>
    </Box>
    )
   }