import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
    return ( 
        <div className="root">
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
     );
}
 
export default Root;
