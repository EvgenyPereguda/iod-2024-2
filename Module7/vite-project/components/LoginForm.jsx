
import { useState, useContext, useEffect } from "react";
import { useUserContext } from "../context/UserContext";
import { MyThemeContext, themes } from "../context/MyThemeProvider";

function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");
  // destructure the context values passed via UserProvider
  const { currentUser, handleUpdateUser } = useUserContext();

  const {theme, darkMode} = useContext(MyThemeContext);


  // // alternative using the useContext hook directly, either works
  // //const {currentUser, handleUpdateUser} = useContext(UserContext);
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
     
        <p>Welcome {currentUser.email}!</p>
        <button onClick={() => handleUpdateUser({})}>Log Out</button>
        </div>
      </>
    );

  return (
    <div style={{background: theme.background, color: theme.foreground}}>      
      <form onSubmit={handleSubmit}>
        <div>{darkMode}
          <label>
            Email:
            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
      {submitResult && <p>{submitResult}</p>}
    </div>
  );
}

export default LoginForm;