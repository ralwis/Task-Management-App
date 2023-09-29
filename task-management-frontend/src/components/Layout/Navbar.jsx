import React from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../../redux/authSlice";
import history from "../../history";

const Navbar = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logoutSuccess());
    localStorage.removeItem("auth");
    history.push("/login");
    window.location.reload();
  };

  return (
    <nav className="NavbarItems">
      <Link to={`/`}>
        <h1 className="navbar-logo">TaskFlow</h1>
      </Link>

      <ul className="nav-menu active">
        {auth.currentUser && auth.currentUser.Token ? (
          <>
            <Link to={`edit/new`}>
              <button className="button">Add New Task</button>
            </Link>
            <Link to={`/login`}>
              <button className="button" onClick={handleClick}>
                Logout
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to={`/login`}>
              <button className="button">Loging</button>
            </Link>
            <Link to={`/register`}>
              <button className="button">Register</button>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
