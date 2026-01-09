import React from "react";
import Label from "./Label";
import { motion } from "framer-motion";
import { Reveal } from "../Common/Reveal";

const Details = () => {
  return (
    <div className="flex flex-col text-left pt-5">
      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-bold text-lg sm:text-xl text-blue-600 dark:text-blue-400 mt-5 mb-2 uppercase tracking-wide"
      >
        <Reveal width="100%">Programming Languages</Reveal>
      </motion.h2>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex gap-2"
      >
        <Label indicator={90}>Go</Label>
        <Label indicator={85}>Python</Label>
        <Label indicator={80}>JavaScript</Label>
        <Label indicator={75}>C</Label>
        <Label indicator={85}>SQL</Label>
      </motion.div>

      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-bold text-lg sm:text-xl text-blue-600 dark:text-blue-400 mt-5 mb-2 uppercase tracking-wide"
      >
        <Reveal width="100%">Technologies</Reveal>
      </motion.h2>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-2"
      >
        <Label indicator={95}>FastAPI</Label>
        <li></li>
        <Label indicator={85}>LangChain</Label>
        <Label indicator={80}>LangGraph</Label>
        <Label indicator={90}>Ollama</Label>
        <Label indicator={85}>React.js</Label>
        <Label indicator={85}>Docker</Label>
        <Label indicator={80}>RabbitMQ</Label>
      </motion.div>

      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-bold text-lg sm:text-xl text-blue-600 dark:text-blue-400 mt-5 mb-2 uppercase tracking-wide"
      >
        <Reveal width="100%">Softwares and Tools</Reveal>
      </motion.h2>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-2"
      >
        <Label indicator={90}>Git</Label>
        <Label indicator={85}>GitHub Actions</Label>
        <Label indicator={95}>VS Code</Label>
        <Label indicator={80}>OpenVINO</Label>
        <Label indicator={85}>Linux CLI</Label>
      </motion.div>

      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-bold text-lg sm:text-xl text-blue-600 dark:text-blue-400 mt-5 mb-2 uppercase tracking-wide"
      >
        <Reveal width="100%">AI and Machine Learning</Reveal>
      </motion.h2>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-2"
      >
        <Label indicator={90}>PyTorch</Label>
        <Label indicator={85}>Transformers</Label>
        <Label indicator={80}>RAG</Label>
        <Label indicator={85}>LoRA / QLoRA</Label>
        <Label indicator={80}>Agentic Workflows</Label>
        <Label indicator={75}>ChromaDB</Label>
      </motion.div>
    </div>
  );
};

export default Details;
