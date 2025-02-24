import LandingPage from "./components/landingpage/LandingPage"
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<><Navbar/><LandingPage/></>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App