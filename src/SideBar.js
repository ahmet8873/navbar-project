import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <section className="nav-section">
      <nav className="sidebar">
        <div className="nav-brand">BRAND NAME</div>
        <div className="nav-items">
          <ul>
            <li>
              <NavLink className="link" to="/">
                home
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/category1">
                category1
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/category2">
                category2
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="#">
                category3
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="#">
                category4
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="#">
                category5
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="#">
                category6
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="#">
                category7
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <button className="nav-btn">☞</button>
    </section>
  );
};

export default SideBar;
