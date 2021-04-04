import React, { useState } from "react";

import "./App.css";
import Quotes from "./components/Quotes";

function App() {
  const [quote, setQuote] = useState(Quotes);
  const NewQuote = () => {
    setQuote(Quotes);
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* <img
          src={logo}
          data-toggle="tooltip"
          title="Click me for new quote!"
          style={{
            height: "40vmin",
            color: "red",
            animation: "App-logo-spin infinite 20s linear",
          }}
          alt="logo"
          onClick={() => NewQuote()}
        /> */}
        <img  alt="meow" onClick={() => NewQuote()}  data-toggle="tooltip"
          title="Click me for new quote!" style={{height:"40%",width:"40%"}} src="https://cdn.dribbble.com/users/2844289/screenshots/9975802/media/4474fa216f3c7c7b572e0e851e406dfc.gif"></img>
        {quote}
      </header>
      <footer style={{ color: "black", fontFamily: "monospace", fontSize: "large" ,float:"right"}}>- An AgilanVageesan Dev PlayGround  </footer>
    </div>
  );
}

export default App;
