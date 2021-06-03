import "./index.css";
import LeftBox from "./components/LeftBox";
import RightBox from "./components/RigthBox";

const App = () => {
  return (
    <div className="container">
      <h1 className="subject">HIS 연락처</h1>
      <div className="contact-wrap">
        <LeftBox />
        <RightBox />
      </div>
    </div>
  );
};

export default App;
