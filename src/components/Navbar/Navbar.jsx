import { Link } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
    const isUserExists = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div className="navbar">
        <div className="nav-start">
        <Link className="nav-links" to="/">
          <h1>Codeaur<span>SomiBhai</span> </h1>
          </Link>
        </div>
        <div className="nav-end">
          {/* <Link className="nav-links" to="/">Home</Link> */}
          <Link className="nav-links" to="/uploadMovie">uploadMovie</Link>
          {isUserExists?     <Link className="nav-links" to="/logout">Logout</Link>   :(
            <>
            <Link className="nav-links" to="/login">Login</Link>
          <Link className="nav-links" to="/signup">Signup</Link>
      

            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
