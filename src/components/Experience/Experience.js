import React from "react";
import "./Experience.css";

export const Experience = () => {
  return (
    <section id="experience" className="experience-container">
      <h1>My journey so far</h1>
      <div className="experience-wrapper row">
        <div className="experience-wrapper col">
          <div className="experience-text title">EXPERIENCE</div>
          <div className="section-container">
            <div className="experience-text date">Aug 2023 - Dec 2023</div>
            <div className="experience-text subtitle">Software Developer</div>
            <div className="experience-text heading1">Shanti Project</div>
            <div className="experience-text body">
              Contracted by Shanti Project through Blueprint build an E-commerce
              website for PAWS Pet Food Bank to automate the order placement and
              delivery scheduling process using React, Typescript, Retool &
              Supabase. Developed a responsive and user-friendly storefront with
              a sticky header, enhancing the overall browsing experience for
              customers. Implemented dynamic routing for item pages, allowing
              users to navigate from storefront to detailed information about a
              specific item.
            </div>
            <a
              href="https://github.com/calblueprint/shanti-project"
              className="experience-text body"
              target="_blank"
            >
              <u>
                Repo<span className="topright-arrow">&#8599;</span>
              </u>
            </a>
          </div>
          <div className="section-container">
            <div className="experience-text date">Jan 2023 - May 2023</div>
            <div className="experience-text subtitle">Software Developer</div>
            <div className="experience-text heading1">
              Chinese Newcomers Service Center
            </div>
            <div className="experience-text body">
              Contracted by CNSC through Blueprint to build a bilingual job
              search application for 5000+ users using React, Firebase &
              Typescript. Implemented job feed functionality for job seekers to
              effectively browse and filter through local employment
              opportunities. Customized app interface for different user types,
              presenting role-specific information and frontend features to
              improve usability.
            </div>
            <a
              href="https://github.com/calblueprint/chinese-newcomers"
              className="experience-text body"
              target="_blank"
            >
              <u>
                Repo<span className="topright-arrow">&#8599;</span>
              </u>
            </a>
          </div>
          <div className="section-container">
            <div className="experience-text date">Jan 2023 - Dec 2023</div>
            <div className="experience-text subtitle">
              Undergraduate Student Instructor
            </div>
            <div className="experience-text heading1">
              Data 100: Principles & Techniques of Data Science
            </div>
            <div className="experience-text body">
              Instructed Data 100, Berkeley's flagship DS course for grad
              students and advanced undergraduates, to 1000+ students. Taught
              fundamental data science concepts such as feature engineering,
              cross-validation, regularization, and logistic regression.
            </div>
          </div>
          <div className="section-container">
            <div className="experience-text date">Aug 2022 - May 2023</div>
            <div className="experience-text subtitle">
              Online Curriculum Developer
            </div>
            <div className="experience-text heading1">Big Data at Berkeley</div>
            <div className="experience-text body">
              Developed and launched Data Science Demystified, an acclaimed
              8-module online course focused on the fundamentals of Data
              Science, including Pandas, Data Visualizations, SQL, and basic
              Machine Learning techniques.
            </div>
            <a
              href="https://bd.studentorg.berkeley.edu/online_course/schedule/"
              className="experience-text body"
              target="_blank"
            >
              <u>
                Link<span className="topright-arrow">&#8599;</span>
              </u>
            </a>
          </div>
          <a
            href="https://drive.google.com/file/d/1vC-u-FIpiiVfh9mUQ2I72avOkEKndmyK/view?usp=sharing"
            className="experience-text heading1"
            target="_blank"
          >
            <u>
              View Full Resume<span className="topright-arrow">&#8599;</span>
            </u>
          </a>
        </div>
        <div className="experience-wrapper col">
          <div className="experience-text title">EDUCATION</div>
          <div className="section-container">
            <div className="experience-text subtitle">
              University of California, Berkeley
            </div>
            <div className="experience-text heading1">
              Bachelor of Arts in Computer Science
            </div>
            <div className="experience-text date">Fall 2021 - Spring 2025</div>
            <div className="experience-text body">
              <b>GPA</b>: 3.92
            </div>
            <div className="experience-text body">
              <b>Activities</b>: Cal Blueprint, Big Data at Berkeley, Data 100 -
              Principles and Techniques of Data Science (uGSI), CS 61A - The
              Structure & Interpretation of Computer Programs (Academic Intern)
            </div>
          </div>
          <div className="experience-text title">COURSEWORK</div>
          <div className="section-container">
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
              <b>CS 186*</b> — Database Systems
            </div>
            <div className="section-text">
              <b>CS 188</b> — Artificial Intelligence
            </div>
            <div className="section-text">
              <b>CS 375</b> — Teaching Techniques in Computer Science
            </div>
            <div className="section-text">
              <b>Info 153A*</b> — Front-End Web Architecture
            </div>
            <div className="section-text">
              <b>Desinv 98</b> — Figma Decal
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
            <div className="experience-text body" style={{ color: "gray" }}>
              <b>*In progress</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
