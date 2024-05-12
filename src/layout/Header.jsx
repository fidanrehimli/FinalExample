import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="container">
      <header>
        <h1>M.</h1>
        <nav>
          <ul>
            <li>
              <NavLink
                to={"/"}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/category"}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                Category
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/men"}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                Men
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/women"}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                Women
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/latest"}
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                Latest
              </NavLink>
            </li>
            <select>
              <option value="">
                <NavLink
                  to={"/pages"}
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  Category
                </NavLink>
              </option>
              <option value="">
                <NavLink
                  to={"/pages"}
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  Single
                </NavLink>
              </option>
              <option value="">
                <NavLink
                  to={"/pages"}
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  Cart
                </NavLink>
              </option>
              <option value="">
                <NavLink
                  to={"/pages"}
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  Login
                </NavLink>
              </option>
              <option value="">
                <NavLink
                  to={"/pages"}
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  Checkout
                </NavLink>
              </option>
              <option value="">
                <NavLink
                  to={"/pages"}
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  Elements
                </NavLink>
              </option>
            </select>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
