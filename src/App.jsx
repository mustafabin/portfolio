import "./styles/App.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav.jsx";
import Landing from "./components/Landing.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import Resume from "./components/Resume.jsx";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing></Landing>
              <About></About>
              <Projects></Projects>
            </>
          }
        ></Route>
        <Route path="/resume" element={<Resume></Resume>}></Route>
        <Route path="*" element={<Landing></Landing>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
