import { Link } from "react-router-dom";
import svg from "../icons/workout.svg"
import user_img from "../icons/user-img.jpg"
import useLogout from "../hooks/useLogout";
import useAuth from "../hooks/useAuth";
const NavBar = () => {
    const { logout } = useLogout();
    const { user } = useAuth();
    const handleClick = () =>{
        logout();
    }
    return ( 
        <nav>
            <div className="nav-bar">
                <Link to="/"><h2>WorkOut Buddy <img src={svg} alt="haha" /></h2></Link> 
                {user && (
                 <div className="delete" onClick={handleClick}>
                     <img className="user-img" src={user_img}  alt="user account"></img>
                     <span className="user">{user.email}</span>
                     <button className="btn">LogOut</button>
                 </div>
                )}
                {!user && (
                    <div className="links">
                    <Link to="login">Login</Link>
                    </div>
                )}
            </div>
        </nav>
     );
}
 
export default NavBar;