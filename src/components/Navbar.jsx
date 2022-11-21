import "../App.css";
import { Link } from "react-router-dom";
import { BiExit } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/auth.slice";

const Navbar = () => {
  const { user, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    if (user && error === "") {
      dispatch(logout());
    }
  };

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
        {Object.keys(user).length !== 0 ? (
          <Link className="navLink" to="/login" onClick={handleLogout}>
            <BiExit />
          </Link>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Navbar;
