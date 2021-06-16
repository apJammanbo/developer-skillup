import { Route, BrowserRouter } from "react-router-dom";
import Luna from "./Pages/Luna";
import Ufo from "./Pages/Ufo";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Luna} exact />
      <Route path="/ufo" component={Ufo} />
    </BrowserRouter>
  );
}

export default App;
