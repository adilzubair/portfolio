import React from "react";
import { Reveal } from "./Reveal";

const Section = ({ id, title, subtitle, children, className }) => {
  return (
    <section
      id={id}
      className={`min-h-fit flex flex-col justify-start items-center py-12 sm:py-16 px-4 sm:px-2 2xl:px-32 md:px-5 text-center relative ${className}`}
    >
      {/* Enhanced Section Header */}
      <div className="relative z-10 mb-8 sm:mb-12">
        <h3 className="py-2 sm:py-3 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold gradient-text uppercase tracking-[1px] ease-in-out">
          <Reveal width="100%">{title}</Reveal>
        </h3>
        
        {/* Modern underline */}
        <div className="w-40 h-2 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        
        <h5 className="max-w-3xl font-semibold text-gray-400 mt-10 mb-4 text-base sm:text-lg md:text-xl lg:text-2xl ease-in-out px-4 sm:px-5 leading-relaxed">
          <Reveal width="100%">{subtitle}</Reveal>
        </h5>
      </div>
      
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
};

export default Section;
