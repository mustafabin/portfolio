import "./styles/App.scss";
import "./styles/BreakPoints.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Nav.jsx";
import Landing from "./components/Landing.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import Resume from "./screens/Resume.jsx";
import SingleProject from "./screens/SingleProject.jsx";
function App() {
  let navigate = useNavigate();
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing></Landing>
              <Projects></Projects>
            </>
          }
        ></Route>
        <Route
          path="/project/:num"
          element={<SingleProject></SingleProject>}
        ></Route>
        <Route path="/resume" element={<Resume></Resume>}></Route>
        <Route
          path="*"
          element={
            <>
              <div className="fullscreen">
                <h1>Wrong Url </h1>
                <button onClick={() => navigate("/")}>Go Home</button>
              </div>
            </>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
