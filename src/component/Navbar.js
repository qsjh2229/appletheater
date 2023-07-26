import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="nav-item" ><NavLink to=''>HOME</NavLink></li>
        <li className="nav-item" ><NavLink to='movies'>MOVIES</NavLink></li>
        <li className="nav-item" ><NavLink to='users'>USERS</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
