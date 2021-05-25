import React, { useState } from "react";
import "./app.css";
import CircleButton from "./CircleButton";

function App() {
  // 필요한 state 정의
  const [result, setResult] = useState([0]);
  const [inputValue, setInputValue] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const getInputValue = () => {
    if (/^[-|1-9][0-9]*$/.test(inputValue)) {
      const number = Number(inputValue);
      if (number) {
        return number;
      }
    }
    if (inputValue) {
      alert(`유효하지 않은 값입니다 [${inputValue}]`);
    } else {
      alert(`값을 입력해주세요`);
    }
    return;
  };

  const addNumber = (number) => {
    const newResult = [...result].splice(0, currentIndex + 1);
    newResult.push(result[currentIndex] + number);
    setCurrentIndex(currentIndex + 1);
    setResult(newResult);
  };

  const handleClick = (type) => {
    if (type === "add" || type === "sub") {
      const number = getInputValue();
      setInputValue("");
      if (number) {
        addNumber(number * (type === "sub" ? -1 : 1));
      }
    } else if (type === "undo") {
      setCurrentIndex(currentIndex - 1);
    } else if (type === "redo") {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="container">
      <div id="valuebox" className="counter">
        {result[currentIndex]}
      </div>
      <input id="inputbox" className="input" value={inputValue} onChange={handleInputChange} />
      <div className="btnGroup">
        <CircleButton label="Undo" disabled={currentIndex === 0} onClick={() => handleClick("undo")} />
        <CircleButton label="+" onClick={() => handleClick("add")} />
        <CircleButton label="-" onClick={() => handleClick("sub")} />
        <CircleButton label="Redo" disabled={currentIndex >= result.length - 1} onClick={() => handleClick("redo")} />
      </div>
    </div>
  );
}

export default App;
