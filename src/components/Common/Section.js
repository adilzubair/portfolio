import React from "react";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

const Section = ({ id, title, subtitle, children, className }) => {
  return (
    <section
      id={id}
      className={`min-h-fit flex flex-col justify-start items-center py-16 sm:py-20 px-4 sm:px-2 2xl:px-32 md:px-5 text-center ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="py-2 sm:py-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 dark:from-blue-400 dark:via-blue-300 dark:to-blue-400 bg-clip-text text-transparent uppercase tracking-wider ease-in-out">
          <Reveal width="100%">{title}</Reveal>
        </h3>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h5 className="max-w-2xl font-medium text-gray-500 dark:text-gray-400 mb-10 sm:mb-12 text-sm sm:text-base md:text-lg ease-in-out px-4 sm:px-5 leading-relaxed">
          <Reveal width="100%">{subtitle}</Reveal>
        </h5>
      </motion.div>
      {children}
    </section>
  );
};

export default Section;
