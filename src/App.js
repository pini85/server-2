import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    localStorage.setItem("id", "34563464634");
  }, []);
  const handleClick = () => {
    window.top.postMessage(
      JSON.stringify({
        error: false,
        message: "Hello World",
      }),
      //! security
      //only let a certain domain to receive send messages
      "https://server-1.netlify.app/"
    );
  };
  return (
    <div className="App">
      <h1>Click me for an event</h1>
      <button onClick={handleClick}>CLICK ME!</button>
    </div>
  );
}

export default App;
