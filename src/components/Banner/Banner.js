import React from "react";
import "./Banner.css";
import { SocialIcon } from "react-social-icons";

export const Banner = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        alert("Email address copied to clipboard!");
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      }
    );
  };

  return (
    <section className="banner-container">
      <div className="banner-content">
        <h1>
          <span className="border-text">Hello World</span> 👋
        </h1>
        <h1>
          My name is <span className="border-text">Celine Choi.</span>
        </h1>
        <h2>
          Welcome to my website 🎶 I am a{" "}
          <span className="border-text">software engineer&nbsp;</span> based
          in&nbsp;
          <span className="border-text">san francisco</span> 📍 I thrive
          on&nbsp;
          <span className="border-text">solving complex problems</span>{" "}
          and&nbsp;
          <span className="border-text">creating impactful solutions</span> 👩🏻‍💻 I
          enjoy <span className="border-text">bringing ideas to life</span>{" "}
          through coding 🌱
        </h2>
        <div className="social-icons">
          <SocialIcon url="https://github.com/celinechoiii" />
          <SocialIcon url="https://linkedin.com/in/celinejwchoi" />
          <SocialIcon url="https://instagram.com/celinejwchoi" />
          <SocialIcon
            network="email"
            bgColor="#fff"
            fgColor="#d21f3c"
            onClick={() => copyToClipboard("celinejwchoiii@gmail.com")}
          />
        </div>
      </div>
    </section>
  );
};
