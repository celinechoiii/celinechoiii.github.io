import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav-wrapper ${scrolled ? "scrolled" : "default"}`}>
      <div className="nav-content">
        {/* <img className="logo" src="" alt="" /> */}
        <div className="logo"></div>

        <div className="menu-wrapper">
          <a className="menu-item">HOME</a>
          <a className="menu-item">ABOUT</a>
          <a className="menu-item">EXPERIENCE</a>
          <a className="menu-item">PROJECTS</a>
        </div>
      </div>
    </nav>
  );
};
