import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  const navActive = ({ isActive }) => {
    return {
      color: isActive ? "red" : null,
    };
  };
  return (
    <div className="nav-bg bg-violet-700 h-20 flex items-center text-gray-50 py-3">
      <div className="navbar container mx-auto flex justify-between items-center ">
        <div className="logo font-extrabold">
          <Link to="/home">
            {" "}
            <h1 className="text-white">
              tech<span className=" text-teal-300">Alpha</span>
            </h1>
          </Link>
        </div>
        <ul className="links flex gap-5">
          <li>
            <NavLink
              className="nav-link font-medium "
              to="/home"
              style={navActive}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link font-medium "
              to="/products"
              style={navActive}
            >
              Products
            </NavLink>
          </li>

          <Link to="/cart">
            <span className="cart-icon relative ">
              <BsCart3 />
              <span className="cart-counter absolute -top-1 -right-8 bg-rose-500 h-5 w-5 rounded-full flex items-center justify-center font-semibold text-xs text-violet-100">
                12
              </span>
            </span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
