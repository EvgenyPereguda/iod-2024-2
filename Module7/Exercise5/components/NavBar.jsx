import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';


import { MyThemeContext } from "../context/MyThemeProvider";

export default function NavBar() {
  const { theme } = useContext(MyThemeContext);
  return (
    <AppBar
      className="NavBar"
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
        <Box sx={{ m: 2, display: 'block' }}>
          <NavLink to="/home">Home</NavLink>
        </Box>
        <Box sx={{ m: 2, display: 'block' }}>
          <NavLink to="/login">Login</NavLink>
        </Box>
        <Box sx={{ m: 2, display: 'block' }}>
          <NavLink to="/bitcoinrates">Bitcoin Rates</NavLink>
        </Box>
        <Box sx={{ m: 2, display: 'block' }}>
          <NavLink to="/posts">Posts</NavLink>
        </Box>
      </Box>
      
    </AppBar>
  );
}