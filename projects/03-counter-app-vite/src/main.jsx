import React from "react";
import ReactDOM from "react-dom/client";
// Components
//import HelloWorld from './HelloWorld';
//import FirstApp from "./FirstApp";
import CounterApp from "./CounterApp";

//Style
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <FirstApp title="Hola mundo" /> */}
    <CounterApp value={1}/>
  </React.StrictMode>
);
