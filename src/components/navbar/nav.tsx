import React, { Component, useState, useEffect, useCallback } from "react";
import mlogo from "./Logo-M.svg";
import krish from "./krish.svg";
import "./nav.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-nav">
        <ul className="navbar-nav-list">
          <li className="navbar-nav-image">
            <div className="navbar-logo">
              <a href="/">
                <img src={mlogo} alt="Milstein-logo" />
              </a>
            </div>
          </li>
          <div className="justify-right">
            <li className="navbar-nav-list-item">
              <a
                href="/internships"
                className={
                  window.location.pathname === "/internships"
                    ? "selected"
                    : "unselected"
                }
              >
                Internships
              </a>
            </li>
            <li className="navbar-nav-list-item">
              <a
                href="/interviews"
                className={
                  window.location.pathname === "/interviews"
                    ? "selected"
                    : "unselected"
                }
              >
                Interviews
              </a>
            </li>
            <li className="navbar-nav-list-item">
              <a
                href="/contact"
                className={
                  window.location.pathname === "/contact"
                    ? "selected"
                    : "unselected"
                }
              >
                Contact Us
              </a>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
