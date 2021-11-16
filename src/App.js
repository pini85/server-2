import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const socket = new WebSocket("wss://pini-backend-playground.herokuapp.com");
  // const handleClick = () => {
  //   window.top.postMessage(
  //     JSON.stringify({
  //       error: false,
  //       message: "foo=bar",
  //     }),
  //     //! security
  //     //only let a certain domain to receive send messages
  //     "*"
  //   );
  // };

  const handleClick = async () => {
    socket.addEventListener("open", (event) => {
      socket.send("Hello Server!");
    });
    // const data = await axios.post(
    //   "https://pini-backend-playground.herokuapp.com/test",
    //   {
    //     hi: "hello",
    //   }
    // );
    // console.log(data);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
