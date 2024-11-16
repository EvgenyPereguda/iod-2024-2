
import Box from '@mui/material/Box';
import { useState, useEffect, useContext } from "react";
import { MyThemeContext } from "../context/MyThemeProvider";

export default function HomePage() { 

    const {theme} = useContext(MyThemeContext);
    
    return (
    <Box className="HomePage" style={{color: theme.foreground}}>
    <h1>Home</h1>
    </Box>
    )
   }
   