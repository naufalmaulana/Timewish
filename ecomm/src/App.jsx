import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import "./assets/css/styles.css";
import Footer from "./components/Footer";

function App() {

  return (
    <>
    <Navbar/>
    <div id="spacer" className="pt-5">
      <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default App
