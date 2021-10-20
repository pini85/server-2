import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [x, setX] = useState(null);
  useEffect(() => {}, []);
  const handleClick = () => {
    window.top.postMessage(
      JSON.stringify({
        error: false,
        message: "foo=bar",
      }),
      //! security
      //only let a certain domain to receive send messages
      "*"
    );
  };
  function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
      begin = dc.indexOf(prefix);
      if (begin != 0) return null;
    } else {
      begin += 2;
      var end = document.cookie.indexOf(";", begin);
      if (end == -1) {
        end = dc.length;
      }
    }
    // if (decodeURI(dc.substring(begin + prefix.length, end))) {
    //   setX("x");
    // }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
  }

  function createCookie() {
    document.cookie = "foo=bar; SameSite=none; Secure";
    setX("x");
  }
  const handleLogin = () => {
    createCookie();
  };

  const checkCookies = () => {
    if (getCookie("foo")) {
      setX("x");
    }
    console.log("cookies inside iframe is:", document.cookie);
  };

  return (
    <div className="App">
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleClick}>Send post message</button>
      <button onClick={checkCookies}> Check cookies</button>
      {getCookie("foo") && <h2>You are logged in</h2>}
    </div>
  );
}

export default App;
