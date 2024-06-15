import React from "react";
import "./About.css";

export const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-wrapper">
        <div className="about-img-container">
          <img
            src="/assets/img/about/about-1.jpeg"
            className="img-rounded"
            style={{ width: "350px" }}
          />
          <img
            src="/assets/img/about/spotify-playing.png"
            style={{ width: "350px" }}
          />
        </div>
        <div className="about-text-container">
          <h1>Here's a little bit about me...</h1>
          <p>
            I am a fourth year at <b>UC Berkeley</b> studying{" "}
            <b>Computer Science</b>! I am originally from{" "}
            <u>Seoul, South Korea</u>, but I've lived in multiple countries
            throughout my life — China, New Zealand, and now in <u>the US</u>.
          </p>
          <p>
            I am a <b>self-motivated</b> and <b>proactive learner</b> who enjoys
            delving into the <u>passion for programming</u> through internships,
            contract work, personal projects, and coursework.
          </p>
          <p>
            Outside of work, I like <u>exploring cute cafes</u> and{" "}
            <u>trying their overpriced drinks</u>,{" "}
            <u>humming to catchy songs</u> (back in my k-pop era), and{" "}
            <u>playing various games</u> (nintendo switch, board games etc.)
            with my friends!
          </p>
          <p>
            Feel free to reach out to me by following my socials or emailing me
            at <b>celinejwchoiii at gmail dot com</b>.
          </p>
        </div>
      </div>
    </section>
  );
};
