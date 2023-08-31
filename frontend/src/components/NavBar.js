import { Link } from "react-router-dom";
import svg from "../icons/workout.svg"
const NavBar = () => {
    return ( 
        <nav>
            <div className="nav-bar">
                <Link to="/"><h2>WorkOut Buddy <img src={svg} alt="haha" /></h2></Link>
                <div className="links">
                <Link to="contact">Contact</Link>
                <Link to="about">About</Link>
                </div>
            </div>
        </nav>
     );
}
 
export default NavBar;