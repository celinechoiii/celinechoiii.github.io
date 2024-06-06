import React from "react";
import aboutmeVideo from "../../assets/videos/aboutme-video.mp4";
import "./About.css";

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <div className="about-text-container">
          <h1>A little bit about me...</h1>
          <p>
            I am a fourth year at <b>UC Berkeley</b> studying{" "}
            <b>Computer Science</b>! I am originally from{" "}
            <b>Seoul, South Korea</b>, but I've lived in multiple countries
            throughout my life -- China, New Zealand, and now in <b>the US</b>.
          </p>
          <p>
            I am a <b>self-motivated</b> and <b>proactive learner</b> who enjoys
            delving into the <b>passion for programming</b> through internships,
            contract work, personal projects, and coursework.
          </p>
          <p>
            Outside of work, I like <b>exploring cute cafes</b> and{" "}
            <b>trying their overpriced drinks</b>,{" "}
            <b>humming to addicting songs</b> (back in my k-pop era), and{" "}
            <b>playing various games</b> (nintendo switch, board games etc.)
            with my friends!
          </p>
          <p>
            Feel free to reach out to me by following my socials or emailing me
            at <b>celinejwchoiii at gmail dot com</b>
          </p>
        </div>
        <video
          src={aboutmeVideo}
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "47%", pointerEvents: "none" }}
        />
      </div>
    </div>
  );
};
