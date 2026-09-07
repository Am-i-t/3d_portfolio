import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box neo-brutalism-blue">
    <p className="font-medium sm:text-xl text-center ">{text}</p>

    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Amit</span> 👋
      <br />
      A Software Engineer from{" "}
      <span className="font-semibold">Durgapur, India</span> 🇮🇳
    </h1>
  ),

  2: (
    <InfoBox
      text="I’m a curious developer, constantly learning new skills and turning what I learn into projects along the way."
      link="/about"
      btnText="Learn more"
    />
  ),

  3: (
    <InfoBox
      text="I’ve built a variety of projects that have helped me explore new technologies, sharpen my skills, and bring ideas to life."
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),

  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away."
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;