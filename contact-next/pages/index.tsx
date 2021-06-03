import LeftBox from "../components/Home/LeftBox";
import RightBox from "../components/Home/RigthBox";

const Home = () => {
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

export default Home;
