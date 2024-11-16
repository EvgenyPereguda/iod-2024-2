import BitcoinRates from "../components/BitcoinRates";
import Box from '@mui/material/Box';
import { useState, useEffect, useContext } from "react";
import { MyThemeContext } from "../context/MyThemeProvider";


export default function BitcoinRatesPage() { 

    const {theme} = useContext(MyThemeContext);
    
    return (
    <Box className="BitcoinRates" style={{background: theme.background, color: theme.foreground}}>
    <h1>Bitcoin Rates</h1>
    <BitcoinRates/>
    </Box>
    )
   }