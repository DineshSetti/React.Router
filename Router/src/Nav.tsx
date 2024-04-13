import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/About">About</Link>
      <Link to="/Courses">Courses</Link>
    </nav>
  );
}

export default Nav;
