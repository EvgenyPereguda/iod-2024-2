import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeting from "../pages/Greeting";

function App() {

   const [count, setCount] = useState(0);

  return (
    <div>
      <Greeting name="">
        <div>Hello&nbsp;</div>
      </Greeting>
      <Greeting name="John">
        <div>Hello&nbsp;</div>
      </Greeting>
    </div>
  );
}

export default App;
