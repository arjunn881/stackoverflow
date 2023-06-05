import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Avatar } from "../avatar/Avatar";
import "../navbar/Navbar.css";
import { setCurrentUser } from "../../actions/currentUser";
export const Navbar = () => {
  const dispatch = useDispatch();

  var User = useSelector((state) => state.currentUserReducer);

  useEffect(() => {
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);

  return (
    <nav>
      <div className="navbar">
        <Link to="/" className="nav-item nav-logo">
          <img
            src="https://www.vectorlogo.zone/logos/stackoverflow/stackoverflow-ar21.svg"
            alt="Logo"
          />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn">
          For Teams
        </Link>
        <form>
          <input type="text" placeholder="Search...." />

          <img
            src="https://cdn2.iconfinder.com/data/icons/asic/50/.svg-5-1024.png"
            alt="Seach"
            width="18"
            className="search-icon"
          />
        </form>
        {User === null ? (
          <Link to="/Auth" className="nav-item nav-links">
            Login
          </Link>
        ) : (
          <>
            <Avatar
              backgroundColor="#009dff"
              px="10PX"
              py="7px"
              borderRadius="50%"
              color="white"
            >
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                A
              </Link>
            </Avatar>

            <button className="nav-item nav-links">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};
