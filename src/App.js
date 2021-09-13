import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleClick = () => {
    window.top.postMessage(
      JSON.stringify({
        error: false,
        message: "Hello World",
      }),
      //! security
      //only let a certain domain send messages
      "http://localhost:3000"
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
