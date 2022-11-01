import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navContainer">
      <h2 className="navbarHeading">Task App</h2>
      <div className="navLinks">
        <Link to="/" className="navLink">
          Home
        </Link>
        <Link to="/add" className="navLink">
          Add Task
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
