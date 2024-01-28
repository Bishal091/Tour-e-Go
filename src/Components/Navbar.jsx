import "./navbar.css";
import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
// import React, { Component } from 'react'

// export default class Navbar extends Component {
//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }

const Navbar = () => {
  const [icon, setIcon] = useState("fas fa-bars");
  const [floatingMenu, setFloatingMenu] = useState("nav-menu");

  return (
    <div className="Navbar">
      <nav className="navbar-items">
        <h1 className="nav-logo">TOUR-E-GO</h1>
        <div className="menu-icon">
          <i
            className={icon}
            onClick={() => {
              if (icon === "fas fa-times") {
                setIcon("fas fa-bars");
                setFloatingMenu("nav-menu");
              } else {
                setIcon("fas fa-times");
                setFloatingMenu("nav-menu active");
              }
            }}
          ></i>
        </div>
        <ul
          className={floatingMenu}
          
        >
          {MenuItems.map((item, index) => {
            return (
              <ul key={index}>
                <Link className={item.cname} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </ul>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
