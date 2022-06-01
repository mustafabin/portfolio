import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav.jsx";
import Landing from "./components/Landing.jsx";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/aboutme" element={<Landing></Landing>}></Route>
        <Route path="/projects" element={<Landing></Landing>}></Route>
        <Route path="/resume" element={<Landing></Landing>}></Route>
        <Route path="*" element={<Landing></Landing>}></Route>
      </Routes>
    </>
  );
}

export default App;
