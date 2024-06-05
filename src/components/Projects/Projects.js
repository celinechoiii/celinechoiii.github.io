import React from "react";
import "./Projects.css";

export const Projects = () => {
  return (
    <div className="projects-container">
      {/* <h1>Projects</h1> */}
      <div className="projects-box">
        <div className="projects-img"></div>
        <div className="stack-container">
          <div className="stack-item">Typescript</div>
          <div className="stack-item">React</div>
          <div className="stack-item">Retool</div>
          <div className="stack-item">Supabase</div>
        </div>
        <h3>Chinese Newcomers</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="projects-box"></div>
      <div className="projects-box"></div>
    </div>
  );
};
