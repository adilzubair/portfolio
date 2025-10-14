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
      className="relative"
    >
      <img
        src={LeftSvg}
        className="absolute hidden left-0 -top-1/4 w-1/12 max-w-xs md:block"
        loading="lazy"
        height={700}
        width={320}
        alt="Decorative geometric pattern"
      />

      <div className="px-3 sm:px-5 md:px-20 overflow-x-hidden max-w-[22rem] sm:max-w-[24rem] md:max-w-[50rem] lg:max-w-[75rem] xl:max-w-[80rem] 2xl:max-w-[100rem]">
        <SkillsMarquee />
      </div>

      <div className="px-4 sm:px-5 md:mx-10 lg:px-20 2xl:px-40 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-5 md:space-x-5">
        <Details />

        <SkillsDescription />
      </div>
    </Section>
  );
};

export default SkillsPage;
