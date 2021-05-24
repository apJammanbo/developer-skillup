import React, { useState } from "react";
import "./app.css";

function App() {
  const [result, setResult] = useState([0]);
  const [value, setValue] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onClick = (type) => {
    if (type === "add" || type === "sub") {
      if (/^[-|1-9][0-9]*$/.test(value)) {
        const number = Number(value);
        if (number) {
          const currentValue = result[currentIndex];
          const newResult = result.splice(0, currentIndex + 1);
          if (type === "add") {
            newResult.push(currentValue + number);
          } else {
            newResult.push(currentValue - number);
          }
          setResult(newResult);
          setCurrentIndex(currentIndex + 1);
        }
      }
      setValue(0);
    } else if (type === "undo") {
      setCurrentIndex(currentIndex - 1);
    } else if (type === "redo") {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="container">
      <div id="valuebox" className="counter">
        {result[currentIndex]}
      </div>
      <input id="inputbox" className="input" value={value} onChange={handleInputChange} />
      <div className="btnGroup">
        <button id="undoButton" className="btn" disabled={currentIndex === 0} onClick={() => onClick("undo")}>
          Undo
        </button>
        <button id="addButton" className="btn" onClick={() => onClick("add")}>
          +
        </button>
        <button id="subButton" className="btn" onClick={() => onClick("sub")}>
          -
        </button>
        <button
          id="redoButton"
          className="btn"
          disabled={currentIndex >= result.length - 1}
          onClick={() => onClick("redo")}
        >
          Redo
        </button>
      </div>
    </div>
  );
}

export default App;
