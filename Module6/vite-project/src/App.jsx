import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Welcome from "../pages/welcome";
import PropsDisplayer from "../pages/PropsDisplayer";
import City from "../pages/City";
import Pet from "../pages/Pet";
import ExplodingBomb from "../components/ExplodingBomb";

function App() {

   const [count, setCount] = useState(0);

  return (
    <>
      <div>       

        <ExplodingBomb/>

        <Pet />

      <Welcome name="students">
      <p>Children of Welcome</p>
      </Welcome>

      {/* Renders the component with no props */}
<PropsDisplayer />

{/* Renders the component with a single prop 'myProp' */}
<PropsDisplayer myProp="first prop"/>

{/* Renders the component with multiple props - add your own! */}
<PropsDisplayer prop1="first" prop2="second" prop3={3}/>

{/* String prop value uses quotes, numeric prop value uses
curly braces */}
<PropsDisplayer name="Harry Styles" age={29}/>

{/* Array prop value - uses curly braces */}
<PropsDisplayer pets={["cat", "dog", "goldfish"]}/>

{/* Variable prop values - uses curly braces */}
<PropsDisplayer reactLogo={reactLogo} buttonCount={count}/>

<City name="Sydney" />

{/* country is not specified, will use default */}
<City name="Melbourne" state="VIC" />

{/* all values are specified, won't use defaults */}
<City name="Chicago" state="Illinois" country="USA" />

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
