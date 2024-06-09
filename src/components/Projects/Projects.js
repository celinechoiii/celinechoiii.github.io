import React from "react";
import "./Projects.css";

export const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <h1>Projects</h1>
      <div className="projects-wrapper">
        <div className="project-box">
          <img
            className="project-img"
            src="/assets/img/projects/pintos.png"
            alt="PintOS"
          />
          <div className="stack-container">
            <div className="stack-item">C</div>
            <div className="stack-item">x86 Architecture</div>
          </div>
          <div className="project-title">PintOS</div>
          <div className="project-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
        <div className="project-box">
          <div className="project-img"></div>
          <div className="stack-container">
            <div className="stack-item">HTML</div>
            <div className="stack-item">CSS</div>
            <div className="stack-item">React</div>
          </div>
          <div className="project-title">Personal Website</div>
        </div>
        <div className="project-box">
          <div className="project-img"></div>
          <div className="stack-container">
            <div className="stack-item">Python</div>
            <div className="stack-item">Machine Learning</div>
          </div>
          <div className="project-title">Pacman AI</div>
        </div>
        <div className="project-box">
          <div className="project-img"></div>
          <div className="stack-container">
            <div className="stack-item">Java</div>
          </div>
          <div className="project-title">Java Version Control System</div>
        </div>
        <div className="project-box">
          <div className="project-img"></div>
          <div className="stack-container">
            <div className="stack-item">Java</div>
          </div>
          <div className="project-title">Dungeon Generator</div>
        </div>
        <div className="project-box">
          <div className="project-img"></div>
          <div className="stack-container">
            <div className="stack-item">Python</div>
            <div className="stack-item">Pandas</div>
            <div className="stack-item">Sklearn</div>
          </div>
          <div className="project-title">Housing Prices</div>
        </div>
        <div className="project-box">
          <div className="project-img"></div>
          <div className="stack-container">
            <div className="stack-item">C</div>
            <div className="stack-item">Pandas</div>
            <div className="stack-item">Sklearn</div>
          </div>
          <div className="project-title">Optimized Matrix Multiplier</div>
        </div>
        <div className="project-box">
          <div className="project-img"></div>
          <div className="stack-container">
            <div className="stack-item">C</div>
            <div className="stack-item">Pandas</div>
            <div className="stack-item">Sklearn</div>
          </div>
          <div className="project-title">Secure File Sharing System</div>
        </div>
        <div className="project-box">
          <div className="project-img"></div>
          <div className="stack-container">
            <div className="stack-item">Figma</div>
          </div>
          <div className="project-title">Recreating Spotify</div>
        </div>
      </div>
    </section>
  );
};
