import React from "react";
import "./Experience.css";

export const Experience = () => {
  return (
    <div className="experience-container">
      <h1>My journey so far...</h1>
      <div className="experience-wrapper row">
        <div className="experience-wrapper col">
          <div className="experience-title">EXPERIENCE</div>
        </div>
        <div className="experience-wrapper col">
          <div className="section-container">
            <div className="experience-title">EDUCATION</div>
            <div className="experience-subtitle">UC Berkeley</div>
          </div>
          <div className="section-container">
            <div className="experience-title">COURSEWORK</div>
            <div className="section-text">
              <b>CS 61A</b> — Structure & Interpretation of Computer Programs
            </div>
            <div className="section-text">
              <b>CS 61B</b> — Data Structures & Programming Methodology
            </div>
            <div className="section-text">
              <b>CS 61C</b> — Computer Architecture & Machine Structures
            </div>
            <div className="section-text">
              <b>CS 70</b> — Discrete Mathematics & Probability Theory
            </div>
            <div className="section-text">
              <b>CS 161</b> — Computer Security
            </div>
            <div className="section-text">
              <b>CS 162</b> — Operating Systems & System Programming
            </div>
            <div className="section-text">
              <b>CS 186</b> — Database Systems
            </div>
            <div className="section-text">
              <b>CS 188</b> — Artificial Intelligence
            </div>
            <div className="section-text">
              <b>CS 375</b> — Teaching Techniques in Computer Science
            </div>
            <div className="section-text">
              <b>Data 8</b> — Foundations of Data Science
            </div>
            <div className="section-text">
              <b>Data 100</b> — Principles & Techniques of Data Science
            </div>
            <div className="section-text">
              <b>Math 54</b> — Linear Algebra & Differential Equations
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
