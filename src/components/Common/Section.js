import React from "react";
import { Reveal } from "./Reveal";

const Section = ({ id, title, subtitle, children, className }) => {
  return (
    <section
      id={id}
      className={`min-h-fit flex flex-col justify-start items-center py-12 sm:py-16 px-4 sm:px-2 2xl:px-32 md:px-5 text-center ${className}`}
    >
      <h3 className="py-2 sm:py-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[1px] ease-in-out">
        <Reveal width="100%">{title}</Reveal>
      </h3>
      <h5 className="max-w-xl font-semibold text-gray-400 mb-8 sm:mb-10 text-xs sm:text-sm md:text-base ease-in-out px-4 sm:px-5 leading-relaxed">
        <Reveal width="100%">{subtitle}</Reveal>
      </h5>
      {children}
    </section>
  );
};

export default Section;
