import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import {Outlet} from "react-router-dom";


export default  function Layout(){

    return(
        <div className="HomePage max-w-[1536px] mx-auto">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}