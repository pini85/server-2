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
      "https://server-1.netlify.app/"
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
    console.log("cookies inside iframe is:", document.cookies);
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
