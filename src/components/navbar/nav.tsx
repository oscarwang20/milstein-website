import React, { Component } from "react";
import mlogo from "./Logo-M.svg";
import krish from "./krish.svg";
import "./nav.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-nav">
          <ul className="navbar-nav-list">
            <li className="navbar-nav-image">
              <div className="navbar-logo">
                <a href="/">
                  <img src={mlogo} alt="Krish savage" />
                </a>
              </div>
            </li>
            <div className="justify-right">
              <li className="navbar-nav-list-item">
                <a href="/">Internships</a>
              </li>
              <li className="navbar-nav-list-item">
                <a href="/about">Interviews</a>
              </li>
              <li className="navbar-nav-list-item">
                <a href="/contact">Contact Us</a>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    );
  }
}
