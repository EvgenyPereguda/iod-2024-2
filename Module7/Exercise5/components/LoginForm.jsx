

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


import { useState, useContext } from "react";
import  useUserContext  from "../context/UserContext";
import { MyThemeContext } from "../context/MyThemeProvider";

function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");
  // destructure the context values passed via UserProvider
  const { currentUser, handleUpdateUser } = useUserContext();

  const {theme} = useContext(MyThemeContext);


  // alternative using the useContext hook directly, either works
  // const {currentUser, handleUpdateUser} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 chars long");
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
    } else {
      setSubmitResult("Successful login.");
      handleUpdateUser({ email: userEmail }); // context function
    }
  };


  {
    /* if the user is already logged in, show msg instead of form */
  }
  if (currentUser.email)
    return (
      <><div className="LoginForm componentBox" style={{background: theme.background, color: theme.foreground}}>
          <Box padding={'0.5em'}>      
          <p>Welcome {currentUser.email}!</p>
          <Button variant="outlined" onClick={() => handleUpdateUser({})}>Log Out</Button>
          </Box>
        </div>
      </>
    );

  return (

   

    <div style={{background: theme.background, color: theme.foreground}}>      
      <form onSubmit={handleSubmit}>   
        <Box padding={'0.5em'}>    
          <Box marginY={'0.5em'}>
              <TextField
                id="outlined-basic" 
                label="Email"
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
              />
          </Box>
          <Box marginY={'0.5em'}>
              <TextField
                id="outlined-basic" 
                label="Password"
                type="password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                required
              />
          </Box>
          <Button variant="outlined" type="submit">Login</Button>
        </Box> 
      </form>
      {submitResult && <p>{submitResult}</p>}
    </div>
  );
}

export default LoginForm;