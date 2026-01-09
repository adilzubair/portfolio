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
        className="font-medium text-xl sm:text-2xl text-blue-600 dark:text-blue-400 mt-4 sm:mt-5 mb-3 sm:mb-5"
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
        className="text-xs sm:text-sm font-light leading-relaxed"
      >
        In the expansive field of software development, I've acquired diverse
        experience in &nbsp;
        <span className="font-semibold">Applied AI, Backend Systems, and Full-Stack Development</span>
      </motion.p>

      <motion.h2
        initial={{ x: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-medium text-base sm:text-lg text-blue-600 dark:text-blue-400 mt-4 sm:mt-5"
      >
        <Reveal width="100%">Backend & Infrastructure</Reveal>
      </motion.h2>
      <motion.p
        initial={{ x: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-xs sm:text-sm font-light leading-relaxed"
      >
        I specialize in building scalable backend systems using Node.js, Go and Python,
        with expertise in microservices architecture, databases, and cloud deployment.
      </motion.p>

      <div className="flex">
        <div className="">
          <motion.h3
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-medium text-base sm:text-lg text-blue-600 dark:text-blue-400 mt-4 sm:mt-5"
          >
            Frontend Development
          </motion.h3>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-light leading-relaxed"
          >
            Proficient in building modern, responsive web applications using React.js, Next.js, and Tailwind CSS,
            with focus on user experience and performance optimization.
          </motion.p>
          <motion.h3
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-medium text-base sm:text-lg text-blue-600 dark:text-blue-400 mt-4 sm:mt-5"
          >
            AI Tools & Systems Integration
          </motion.h3>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-light leading-relaxed"
          >
            Specialized in building RAG systems and Agentic Workflows using LangChain and LangGraph. Experienced in LLM fine-tuning (LoRA/QLoRA) and performance optimization via quantization (OpenVINO).
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default SkillsDescription;
