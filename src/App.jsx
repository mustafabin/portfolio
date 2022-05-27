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
        <Route path="/aboutme" element={<h1>About</h1>}></Route>
        <Route path="/projects" element={<h1>Projects</h1>}></Route>
        <Route path="/resume" element={<h1>resume</h1>}></Route>
        <Route path="*" element={<h1>Error</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
