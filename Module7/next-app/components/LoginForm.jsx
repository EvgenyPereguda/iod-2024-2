"use client";

import { useState } from "react";

function LoginForm() {
  // input state values always need to be strings - empty initially
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");
  const [showForm, setShowForm] = useState(true);


  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reloading on form submit
    // add some password validation
    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 characters long");
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
    } else {
        setShowForm(false);
      setSubmitResult("Successful login.");    
    }
  };

  return (
    <div className="LoginForm componentBox">
      {showForm && <form onSubmit={handleSubmit}>
        <div className="LoginForm componentBox">
          <div className="formRow">
            <label>
              Email Address:
              {/* Controlled form element needs both value and onChange.
    onChange handler uses event param e to access target value.
    Whenever user types, new value is stored in state. */}
              <input
                type="email"
                value={userEmail}
                name="userEmail"
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="formRow">
            <label>
              Password:
              <input
                type="password"
                value={userPassword}
                name="password"
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </label>
          </div>
        </div>
        <button className="bg-blue-500 text-white rounded-lg px-2 py-3 mx-2 my-2">
          Log In
        </button>
        <p>{submitResult}</p>
      </form> }
    </div>
  );
}
// try removing the onChange prop and typing in a field
export default LoginForm;
