import React from "react";
import "./Projects.css";

const projectData = [
  {
    imgSrc: "/assets/img/projects/pintos.png",
    imgAlt: "PintOS",
    stack: ["C", "x86 Architecture"],
    title: "PintOS",
    description:
      "Built an educational operating system that supports user-level multithreading, efficient resource management, and advanced file system features.",
  },
  {
    imgSrc: "/assets/img/projects/celine-memoji.png",
    imgAlt: "celine-memoji",
    stack: ["HTML/CSS", "JavaScript", "React"],
    title: "Personal Website",
    description:
      "Created a personal portfolio to display my journey as a software engineer. To be updated along the way :)",
    repoLink: "https://github.com/celinechoiii/personal-website",
  },
  {
    imgSrc: "/assets/img/projects/pacman.png",
    imgAlt: "pacman",
    stack: ["Python", "Machine Learning"],
    title: "Pacman AI",
    description:
      "Implemented search algorithms, probabilistic reasoning, and reinforcement learning for Pacman to navigate mazes, avoid ghosts, and maximize the game score.",
  },
  {
    imgSrc: "/assets/img/projects/version-control.png",
    imgAlt: "version-control",
    stack: ["Java"],
    title: "Version Control System",
    description:
      "Designed to mimic features of Git, such as commit, branch, and checkout, by utilizing SHA-1 hashing and file serialization to support persistence.",
  },
  {
    imgSrc: "/assets/img/projects/byow.png",
    imgAlt: "byow",
    stack: ["Java"],
    title: "Dungeon Generator",
    description:
      "Developed Java-based engine for pseudorandom world generation, along with persistence programming for save and load functionality.",
  },
  {
    imgSrc: "/assets/img/projects/cook-county.png",
    imgAlt: "housing-prices",
    stack: ["Python", "Pandas", "Sklearn"],
    title: "Housing Prices",
    description:
      "Analyzed Cook County housing data to identify price trends and insights, and built a linear regression model to predict housing prices using data cleaning and feature engineering.",
  },
  {
    imgSrc: "/assets/img/projects/convolve-1d.svg",
    imgAlt: "berkeleytime",
    stack: ["C", "Pandas", "Sklearn"],
    title: "Optimized Matrix Multiplier",
    description:
      "Optimized matrix multiplication program using SIMD instructions, OpenMP for multithreading, and Open MPI for distributed memory parallelization.",
  },
  {
    imgSrc: "/assets/img/projects/file-share.png",
    imgAlt: "filesharing",
    stack: ["Go"],
    title: "Secure File Sharing",
    description:
      "Leveraged encryption techniques and secure hash functions to guarantee secure file access and storage mechanisms.",
  },
  {
    imgSrc: "/assets/img/projects/berkeleytime.png",
    imgAlt: "berkeleytime",
    imgStyle: { width: "50%" },
    stack: ["Figma"],
    title: "BerkeleyTime App Design",
    description:
      "Designed the Hi-Fi model of a dynamic, scalable mobile application for the BerkeleyTime website, incorporating variants and auto layout to ensure compatibility across various devices.",
    externalLink:
      "https://www.figma.com/design/sM3PH5xbBCmwfrrxMOS6nA/BerkeleyTime-App-Design?node-id=5-45",
    disclaimer:
      "Disclaimer: I am not affiliated with the BerkeleyTime team; this is solely a personal project.",
  },
  {
    imgSrc: "/assets/img/projects/snek-game.png",
    imgAlt: "snek",
    stack: ["C"],
    title: "Snek",
    description:
      "Created a classic Snake game in the terminal. Player uses the arrow keys to navigate through the grid to eat fruits while avoiding collisions.",
  },
  {
    imgSrc: "/assets/img/projects/cs61cpu.png",
    imgAlt: "cpu",
    stack: ["Logisim"],
    title: "CS61CPU",
    description:
      "Designed and constructed a simple CPU architecture that supports RISC-V assembly instructions and 2-stage pipelining.",
  },
  {
    imgSrc: "/assets/img/projects/2048.jpeg",
    imgAlt: "2048",
    stack: ["Java"],
    title: "2048",
    description:
      "Recreated the core functionality for the 2048 game, managing key-press events and updating the game state.",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <h1>Projects</h1>
      <div className="projects-wrapper">
        {projectData.map((project, index) => (
          <div className="project-box" key={index}>
            <img
              className="project-img"
              src={project.imgSrc}
              alt={project.imgAlt}
              style={project.imgStyle}
            />
            <div className="stack-container">
              {project.stack.map((tech, index) => (
                <div className="stack-item" key={index}>
                  {tech}
                </div>
              ))}
            </div>
            <div className="project-title">{project.title}</div>
            <div className="project-description">
              <p>{project.description}</p>
              {project.repoLink && (
                <a href={project.repoLink} target="_blank">
                  Repo<span className="topright-arrow">&#8599;</span>
                </a>
              )}
              {project.externalLink && (
                <a href={project.externalLink} target="_blank">
                  Link<span className="topright-arrow">&#8599;</span>
                </a>
              )}
              {project.disclaimer && (
                <p style={{ fontSize: "11px" }}>{project.disclaimer}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
