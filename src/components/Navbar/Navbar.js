import React, { useState, useEffect } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 2 - 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (item) => {
    setActive(item);
  };

  return (
    <nav className={`nav-wrapper ${scrolled ? "scrolled" : "default"}`}>
      <div className="nav-content">
        <a href="#home" className="logo" onClick={() => handleClick("")}>
          CELINE <span className="logo lastname">CHOI</span>
          {/* <img className="logo-pic" src={celineMemoji} alt="Celine Memoji" /> */}
        </a>

        <div className="menu-wrapper">
          <a
            href="#home"
            className={`menu-item ${active === "home" ? "active" : ""}`}
            onClick={() => handleClick("home")}
          >
            HOME
          </a>
          <a
            href="#about"
            className={`menu-item ${active === "about" ? "active" : ""}`}
            onClick={() => handleClick("about")}
          >
            ABOUT
          </a>
          <a
            href="#experience"
            className={`menu-item ${active === "experience" ? "active" : ""}`}
            onClick={() => handleClick("experience")}
          >
            EXPERIENCE
          </a>
          <a
            href="#projects"
            className={`menu-item ${active === "projects" ? "active" : ""}`}
            onClick={() => handleClick("projects")}
          >
            PROJECTS
          </a>
          <a
            href="https://drive.google.com/file/d/1vC-u-FIpiiVfh9mUQ2I72avOkEKndmyK/view?usp=sharing"
            className="menu-item resume"
            target="_blank"
          >
            RESUME
          </a>
        </div>
      </div>
    </nav>
  );
};
