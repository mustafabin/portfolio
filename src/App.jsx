import "./styles/App.scss"
import "./styles/BreakPoints.scss"
import { Routes, Route, useNavigate } from "react-router-dom"
import Navbar from "./components/Nav.jsx"
import Landing from "./components/Landing.jsx"
import Projects from "./components/Projects.jsx"
import Footer from "./components/Footer.jsx"
import Resume from "./screens/Resume.jsx"
import SingleProject from "./screens/SingleProject.jsx"
function App() {
  let navigate = useNavigate()
  return (
    <>
      <Navbar/>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Landing />
              {/* <Projects /> */}
            </>
          }></Route>
        <Route path='/project/:num' element={<SingleProject />}></Route>
        <Route path='/resume' element={<Resume />}></Route>
        <Route
          path='*'
          element={
            <>
              <div className='fullscreen'>
                <h1>Wrong Url </h1>
                <button onClick={() => navigate("/")}>Go Home</button>
              </div>
            </>
          }></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
