import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "../Common/Reveal";

const SkillsDescription = () => {
  return (
    <div className="text-left lg:pt-0">
      <motion.h2
        initial={{ x: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-medium text-2xl text-blue-600 dark:text-blue-400 mt-5 mb-5"
      >
        <Reveal width="100%">
          A look at all the programming languages, libraries, and tools I've
          worked with.
        </Reveal>
      </motion.h2>
      <motion.p
        initial={{ x: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-sm font-light"
      >
        In the expansive field of software development, I've acquired diverse
        experience in &nbsp;
        <span className="font-semibold">Full-Stack Development, Backend Systems, and Cloud Technologies</span>
      </motion.p>

      <motion.h2
        initial={{ x: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-medium text-lg text-blue-600 dark:text-blue-400 mt-5"
      >
        <Reveal width="100%">Backend & Infrastructure</Reveal>
      </motion.h2>
      <motion.p
        initial={{ x: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-sm font-light"
      >
        I specialize in building scalable backend systems using Go and Python,
        with expertise in microservices architecture, databases, and cloud deployment.
      </motion.p>

      <div className="flex">
        <div className="">
          <motion.h3
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-medium text-lg text-neutral-600 dark:text-neutral-200 mt-5"
          >
            Go (Golang)
          </motion.h3>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-light"
          >
            My primary backend language for building high-performance microservices,
            APIs, and concurrent systems with excellent scalability.
          </motion.p>
          <motion.h3
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-medium text-lg text-neutral-600 dark:text-neutral-200 mt-5"
          >
            Python & FastAPI
          </motion.h3>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-light"
          >
            Experienced in building modern APIs with FastAPI, data processing,
            and AI/ML integrations with excellent performance and documentation.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default SkillsDescription;
