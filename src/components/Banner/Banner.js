import React from "react";
import "./Banner.css";

export const Banner = () => {
  return (
    <section id="home" className="banner-container">
      <div className="banner-content">
        <h1>
          <span className="border-text">Hello World!</span>
        </h1>
        <h1>
          <span className="border-text">
            My name is <span className="custom-underline">Celine Choi</span>.
          </span>
        </h1>
        <h2>
          I'm a <b>software engineer</b> based in <b>Berkeley, CA</b>. I am
          passionate about <b>solving complex problems</b> and{" "}
          <b>creating impactful solutions</b> through code.
        </h2>
        <div className="social-icons-container">
          <a
            href="https://github.com/celinechoiii"
            target="_blank"
            class="social-icon"
          >
            Github<span className="topright-arrow">&#8599;</span>
          </a>
          <a
            href="https://www.linkedin.com/in/celinejwchoi"
            target="_blank"
            class="social-icon"
          >
            LinkedIn<span className="topright-arrow">&#8599;</span>
          </a>
          <a
            href="https://www.instagram.com/celinejwchoi"
            target="_blank"
            class="social-icon"
          >
            Instagram<span className="topright-arrow">&#8599;</span>
          </a>
          <a
            href="mailto:celinejwchoiii@gmail.com"
            target="_blank"
            class="social-icon"
          >
            Email<span className="topright-arrow">&#8599;</span>
          </a>
        </div>
      </div>
      {/* <div className="down-arrow">&#x2193;</div> */}
    </section>
  );
};
