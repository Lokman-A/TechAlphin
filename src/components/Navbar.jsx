import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navActive = ({ isActive }) => {
    return {
      color: isActive ? "teal" : null,
    };
  };
  return (
    <div className="nav-bg bg-orange-500 text-gray-50 py-3">
      <div className="navbar container mx-auto flex justify-between items-center ">
        <div className="logo font-extrabold">
          <h1 className="text-white">
            tech<span className=" text-teal-300">Alpha</span>
          </h1>
        </div>
        <ul className="links flex gap-5">
          <li>
            <NavLink to="/home" style={navActive}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" style={navActive}>
              Products
            </NavLink>
          </li>
          <h1 className="icon-counter">=</h1>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
