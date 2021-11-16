import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const url = () => {
    if (process.env.NODE_ENV === "development") {
      return "ws://localhost:8080/";
    }
    return "wss://pini-backend-playground.herokuapp.com";
  };
  const socket = new WebSocket(url());
  useEffect(() => {
    socket.addEventListener("open", function (event) {
      console.log("Connected to WS Server");
    });

    // Listen for messages
    // socket.addEventListener("message", function (event) {
    //   console.log("Message from server ", event.data);
    // });
  }, []);
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
    const obj = { studentId: 1234 };
    socket.send(JSON.stringify(obj));
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
