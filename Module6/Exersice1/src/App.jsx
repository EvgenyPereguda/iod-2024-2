import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeting from "../components/Greeting";

function App() {

  return (
    <div>
      <Greeting>
        <div>Hello</div>
      </Greeting>
      <Greeting name="John">
        <div>Hello</div>
      </Greeting>
    </div>
  );
}

export default App;
