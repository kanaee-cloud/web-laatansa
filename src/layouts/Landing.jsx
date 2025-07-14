import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"


const Landing = () => {
  return (
    <main>
        <Navbar />
        <Outlet />
    </main>
  )
}

export default Landing