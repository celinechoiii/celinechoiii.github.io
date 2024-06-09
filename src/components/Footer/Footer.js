import "./Footer.css";
import React from "react";

export const Footer = () => {
  return (
    <section className="footer-container">
      <div className="footer-text">
        Do I have your attention? Connect with me!
      </div>
      <div className="footer-text">
        <a href="https://github.com/celinechoiii" target="_blank">
          Github
        </a>{" "}
        <span>•</span>{" "}
        <a href="https://www.linkedin.com/in/celinejwchoi" target="_blank">
          LinkedIn
        </a>{" "}
        <span>•</span>{" "}
        <a href="https://instagram.com/celinejwchoi" target="_blank">
          Instagram
        </a>{" "}
        <span>•</span>{" "}
        <a href="mailto:celinejwchoiii@gmail.com" target="_blank">
          Email
        </a>
      </div>
      <div className="footer-text">Built with ♥ by Celine</div>
    </section>
  );
};
