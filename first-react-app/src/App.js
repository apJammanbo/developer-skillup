import "./app.css";

function App() {
  return (
    <div className="container">
      <div id="valuebox" className="counter">
        0
      </div>
      <input id="inputbox" className="input" />
      <div className="btnGroup">
        <button id="undoButton" className="btn" disabled>
          Undo
        </button>
        <button id="addButton" className="btn">
          +
        </button>
        <button id="subButton" className="btn">
          -
        </button>
        <button id="redoButton" className="btn" disabled>
          Redo
        </button>
      </div>
    </div>
  );
}

export default App;
