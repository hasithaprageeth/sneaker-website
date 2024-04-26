import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="nav container">
      <a href="#" className="nav-logo">
        Sneakers
      </a>
      <div
        className={showMenu === true ? "nav-menu show-menu" : "nav-menu"}
        id="nav-menu"
      >
        <ul className="nav-list">
          <li>
            <a onClick={() => setShowMenu(false)} href="#" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a onClick={() => setShowMenu(false)} href="#" className="nav-link">
              About Us
            </a>
          </li>
          <li>
            <a onClick={() => setShowMenu(false)} href="#" className="nav-link">
              New
            </a>
          </li>
          <li>
            <a onClick={() => setShowMenu(false)} href="#" className="nav-link">
              Collection
            </a>
          </li>
          <li>
            <a onClick={() => setShowMenu(false)} href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>

        <div
          onClick={() => setShowMenu(false)}
          className="nav-close"
          id="nav-close"
        >
          <i className="ri-close-line"></i>
        </div>

        <div className="nav-social">
          <a href="https://www.facebook.com/" className="nav-social-link">
            <i className="ri-facebook-circle-line"></i>
          </a>
          <a href="https://www.instagram.com/" className="nav-social-link">
            <i className="ri-instagram-line"></i>
          </a>
          <a href="https://www.twitter.com/" className="nav-social-link">
            <i className="ri-twitter-x-line"></i>
          </a>
        </div>
      </div>
      <div
        onClick={() => setShowMenu(true)}
        className="nav-toggle"
        id="nav-toggle"
      >
        <i className="ri-apps-2-line"></i>
      </div>
    </nav>
  );
};

export default NavBar;
