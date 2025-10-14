import React from "react";
import { motion } from "framer-motion";
import { fadeTop, motionStep } from "./Motion";
import Featured from "./Featured";
import Section from "../Common/Section";
import ProjectCard from "./ProjectCard";
import RightSvg from "../../assets/svg/right-pattern.svg";
import { projects } from "./Constants";

const Projects = () => {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Projects upon which I have worked on."
      className="relative"
    >
      <div className="space-y-6 sm:space-y-5 lg:space-y-10 px-4 sm:px-5 md:px-10 lg:px-20 2xl:px-40">
        {/* Right SVG */}
        <img
          src={RightSvg}
          alt="Decorative geometric pattern"
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        {projects
          .filter((e) => e.featured === true)
          .map((e, i) => (
            <motion.div key={i} variants={fadeTop} {...motionStep}>
              <Featured
                live={e.live}
                thumbnail={e.thumbnail}
                code={e.code}
                title={e.title}
                description={e.description}
                tech={e.tech}
                secondary={i % 2 === 0 ? false : true}
              />
            </motion.div>
          ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 gap-y-8 sm:gap-y-10 my-8 sm:my-10 px-4 sm:px-5 md:px-10 lg:px-20 2xl:px-40">
        {projects
          .filter((e) => e.featured !== true)
          .map((e, i) => (
            <ProjectCard
              live={e.live}
              thumbnail={e.thumbnail}
              code={e.code}
              title={e.title}
              description={e.description}
              tech={e.tech}
              key={i}
            />
          ))}
      </div>
      <div className="text-center px-4 sm:px-5">
        <span className="text-sm sm:text-base">
          For More Projects and Other work visit my{" "}
          <a
            href="https://github.com/adilzubair?tab=repositories&q=&type=source&language=&sort="
            className="font-bold text-red-500 hover:text-red-600 transition-colors"
          >
            GitHub
          </a>
        </span>
      </div>
    </Section>
  );
};

export default Projects;
