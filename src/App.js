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
      "https://613f200eed232ac79f2fb85a--server-1.netlify.app/"
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
