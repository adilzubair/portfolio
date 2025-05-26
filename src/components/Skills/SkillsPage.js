import React from "react";
import Section from "../Common/Section";
import SkillsDescription from "./SkillsDescription";
import Details from "./Details";

import LeftSvg from "../../assets/svg/left-pattern.svg";
import SkillsMarquee from "./SkillsMarquee";

const SkillsPage = () => {
  return (
    <Section
      id="skills"
      title="expertise"
      subtitle="I am proficient in performing tasks related to all of the listed skills below."
      className="relative overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-blue-500 rounded-full opacity-5 blur-3xl float"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-500 rounded-full opacity-5 blur-3xl float" style={{animationDelay: '1.5s'}}></div>
      
      <img
        src={LeftSvg}
        className="absolute hidden left-0 -top-1/4 w-1/12 max-w-xs md:block opacity-20"
        loading="lazy"
        height={700}
        width={320}
        alt=""
      />

      {/* Modern Skills Marquee with Glass Effect */}
      <div className="relative mb-16">
        <div className="glass dark:glass-dark rounded-3xl p-8 mx-4 shadow-modern">
          <div className="px-3 sm:px-5 md:px-20 overflow-x-hidden max-w-[22rem] sm:max-w-[24rem] md:max-w-[50rem] lg:max-w-[75rem] xl:max-w-[80rem] 2xl:max-w-[100rem]">
            <SkillsMarquee />
          </div>
        </div>
      </div>

      {/* Enhanced Grid Layout */}
      <div className="px-4 sm:px-5 md:mx-10 lg:px-20 2xl:px-40 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <div className="glass dark:glass-dark rounded-3xl p-8 shadow-modern glow-hover">
          <Details />
        </div>

        <div className="glass dark:glass-dark rounded-3xl p-8 shadow-modern glow-hover">
          <SkillsDescription />
        </div>
      </div>
    </Section>
  );
};

export default SkillsPage;
