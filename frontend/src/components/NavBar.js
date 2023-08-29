import { Link } from "react-router-dom";
import svg from "../icon/workout.svg"
const NavBar = () => {
    return ( 
        <nav>
            <div className="nav-bar">
                <Link to="/"><h2>Work Buddy <img src={svg} alt="haha" /></h2></Link>
                <Link to="about">About</Link>
            </div>
        </nav>
     );
}
 
export default NavBar;