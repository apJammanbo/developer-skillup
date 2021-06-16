import "./index.css";
import LeftBox from "./components/LeftBox";
import RightBox from "./components/RigthBox";
import { useRef } from "react";

const App = () => {
  const rootEl = useRef(null);

  return (
    <div
      tabIndex={1}
      className="container"
      onFocus={(event) => {
        console.log(event);
        // this.contains(document.activeElement);
      }}
      onBlur={() => console.log("onBlur Root")}
    >
      <h1 className="subject">HIS 연락처</h1>
      <div className="contact-wrap">
        <LeftBox />
        <RightBox />
      </div>
    </div>
  );
};

export default App;
