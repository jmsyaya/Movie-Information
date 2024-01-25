// import logo from "./logo.svg";
// import "./App.css";
import Menu from "./Menu";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Rank from "./Rank";

function App() {
  return (
    <div>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rank" element={<Rank />} />
      </Routes>
    </div>
  );
}

export default App;
