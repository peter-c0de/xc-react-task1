import { useState } from "react";
import "./App.css";

function App() {
  const [position, setPosition] = useState(0);

  const reset = () => {
    setPosition(0);
    console.log("Reset: ", 0);

  };

  const moveRight = () => {
    setPosition(position+20);
    console.log("New Position: ", position+20);

  };

  const moveLeft = () => {
    if ( position > 0 )  {
      setPosition(position-20);
      console.log("New Position: ", position-20);
    }

  };

  return (
    <div className="container">
      <div
        className="box"
        style={{ left: position + "px" }}
      ></div>

      <div className="buttons">
        <button onClick={reset}>Reset</button>
        <button onClick={moveLeft}>Move Left</button>
        <button onClick={moveRight}>Move Right</button>
      </div>
      { console.log("Current Position: ", position) }
    </div>
  );
}

export default App;
