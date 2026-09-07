import React from "react";
import { skills, certificates } from "../constants";
import CTA from '../components/CTA'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Amit
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I’m a Computer Science graduate and aspiring Full-Stack Developer
          passionate about building modern, responsive web applications. I enjoy
          solving problems, learning new technologies, and turning ideas into
          practical digital experiences.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Certifications & Achievements</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            A collection of certifications and achievements that reflect my
            continuous learning, technical skills, and commitment to growth.
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {certificates.map((certificate, index) => (
              <VerticalTimelineElement
                key={index}
                date={certificate.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={certificate.icon}
                      alt={certificate.platform_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: certificate.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: certificate.tagBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {certificate.title}
                  </h3>
                  <p className="text-black-500 font-medium font-base">
                    {certificate.platform_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {certificate.points.map((point, index) => (
                    <li
                      key={`certificate-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm font-semibold text-blue-500 hover:text-blue-700 transition-colors"
                >
                  View Certificate →
                </a>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200"/>
      <CTA/>
    </section>
  );
};

export default About;
