import { Outlet } from "react-router-dom";
import { Box, CardActionArea, Select, MenuItem, Divider, FormControl } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { MyThemeContext } from "../context/MyThemeProvider";


export default function PostsPage() {

    const {theme} = useContext(MyThemeContext);

  return (
    <Box className="PostsPage" sx={{ px: 4, py:1  }} style={{background: theme.background, color: theme.foreground}}>   
      <h1>Posts</h1>
      <Outlet />
    </Box>
  );
}