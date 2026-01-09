import React from "react";
import Section from "../Common/Section";
import { motion } from "framer-motion";
import Quote from "../Common/Quote";
import FeaturedCard from "../FeatureCard/FeaturedCard";
import { FaGraduationCap } from "react-icons/fa";
import RightSvg from "../../assets/svg/right-pattern.svg";
import { Reveal } from "../Common/Reveal";
import BlurCircles from "../Common/BlurCircles";
import { HiOutlineBuildingOffice } from "react-icons/hi2";

const About = () => {
  return (
    <Section
      id="about"
      title="Overview"
      subtitle="Software Engineer"
      className="relative"
    >
      <img
        src={RightSvg}
        alt="Decorative geometric pattern"
        className="absolute hidden right-0 bottom-[40%] w-2/12 max-w-xs md:block"
        loading="lazy"
        height={700}
        width={320}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full px-4 sm:px-5 md:px-20 flex flex-col gap-6 md:gap-10"
      >
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-3 text-center sm:text-left bg-gradient-to-r from-slate-800 via-blue-700 to-slate-800 dark:from-slate-100 dark:via-blue-300 dark:to-slate-100 bg-clip-text text-transparent">
            Hi, I am Muhamed Adil Edavana Valappil
          </h2>
          <p className="mb-6 text-base sm:text-lg text-center sm:text-left leading-relaxed text-slate-700 dark:text-slate-300">
            Applied AI Engineer with hands-on experience building, fine-tuning, and deploying LLM-powered systems end to end. Specialized in RAG, Agentic Workflows, and PEFT (LoRA/QLoRA). Focused on taking models from research to production-grade APIs.
          </p>
          <h4 className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4 sm:mb-3 text-center sm:text-left uppercase tracking-wide">
            <Reveal width="100%">Work Experience</Reveal>
          </h4>
          <FeaturedCard
            icon={
              <div className="rounded-xl bg-blue-600 p-3.5 dark:bg-blue-400">
                <HiOutlineBuildingOffice className="h-5 w-5 text-white" />
              </div>
            }
            title="Software Developer at Greentruth Technology"
            subtitle="Aug 2025 - Present | Dubai, UAE"
            desc={
              <ul className="list-disc pl-5 space-y-2 text-left">
                <li>
                  Designed and implemented multimodal AI systems spanning classical ML, NLP, and Generative AI, focusing on production-grade reliability and scalability.
                </li>
                <li>
                  Spearheaded the transition to local LLM execution (Ollama), reducing external API dependency and ensuring data privacy for sensitive enterprise data.
                </li>
                <li>
                  Developed rigorous evaluation pipelines using BLEU, ROUGE, and human qualitative analysis to monitor model factuality and significantly reduce hallucinations.
                </li>
                <li>
                  Integrated complex LLM inference logic into production APIs via FastAPI, implementing JWT authentication, rate limiting, and structured output validation.
                </li>
                <li>
                  Fine-tuned transformer models such as BERT, GPT-2, and Phi-3 using LoRA and QLoRA for memory-efficient training on consumer GPUs.
                </li>
              </ul>
            }
          />
          <FeaturedCard
            icon={
              <div className="rounded-xl bg-blue-600 p-3.5 dark:bg-blue-400">
                <HiOutlineBuildingOffice className="h-5 w-5 text-white" />
              </div>
            }
            title="Software Engineer at Cooee"
            subtitle="May 2025 - July 2025 | Remote, Australia"
            desc={
              <ul className="list-disc pl-5 space-y-2 text-left">
                <li>
                  Developed backend microservices in Golang and Python to support a consumer platform targeting 100K+ users.
                </li>
                <li>
                  Optimized asynchronous workflows and message queues using RabbitMQ, reducing end-to-end notification latency by 90%.
                </li>
                <li>
                  Resolved production bottlenecks affecting 1,000+ users by profiling API bottlenecks and database query paths.
                </li>
                <li>
                  Implemented JWT-based authentication, OAuth flows, and secure audit logging for sensitive user operations.
                </li>
              </ul>
            }
          />
          <FeaturedCard
            icon={
              <div className="rounded-xl bg-blue-600 p-3.5 dark:bg-blue-400">
                <HiOutlineBuildingOffice className="h-5 w-5 text-white" />
              </div>
            }
            title="Industrial Trainee at Intel Corporation"
            subtitle="May 2024 - July 2024 | Bangalore, India"
            desc={
              <ul className="list-disc pl-5 space-y-2 text-left">
                <li>
                  Optimized LLM inference pipelines on Intel CPUs using OpenVINO for quantization and graph optimization.
                </li>
                <li>
                  Automated model conversion and benchmarking workflows to evaluate latency and throughput across edge hardware.
                </li>
                <li>
                  Built an interactive Gradio interface for real-time inference with configurable decoding and performance parameters.
                </li>
              </ul>
            }
          />
          <FeaturedCard
            icon={
              <div className="rounded-xl bg-blue-600 p-3.5 dark:bg-blue-400">
                <HiOutlineBuildingOffice className="h-5 w-5 text-white" />
              </div>
            }
            title="Data Analyst Intern at Al Wafaa Group"
            subtitle="Aug 2023 - Sep 2023 | Dubai, UAE"
            desc={
              <ul className="list-disc pl-5 space-y-2 text-left">
                <li>
                  Built an automated ETL pipeline to analyze 3,000+ customer
                  records, enabling upselling and retention insights.
                </li>
                <li>
                  Automated lead qualification and CRM workflows using Python,
                  reducing manual effort by 70%.
                </li>
                <li>
                  Designed real-time interactive dashboards using IBM Cognos and
                  Python, optimizing marketing data.
                </li>
              </ul>
            }
          />
          <FeaturedCard
            icon={
              <div className="rounded-xl bg-blue-600 p-3.5 dark:bg-blue-400">
                <HiOutlineBuildingOffice className="h-5 w-5 text-white" />
              </div>
            }
            title="Research Intern at National Chung Cheng University"
            subtitle="July 2024 - September 2024 | Chiayi, Taiwan"
            desc={
              <ul className="list-disc pl-5 space-y-2 text-left">
                <li>
                  Developed software pipelines for processing and analyzing
                  hyperspectral imaging (HSI) data using Python and ML frameworks.
                </li>
                <li>
                  Applied best practices for data integrity and reproducibility
                  while managing imaging datasets and experimental workflows.
                </li>
                <li>
                  Reviewed and synthesized findings from peer-reviewed AI/ML
                  research in agriculture, environment, and mining.
                </li>
                <li>
                  Enhanced skills in data preprocessing, model training, and
                  technical documentation for publication.
                </li>
              </ul>
            }
          />
          <h4 className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4 sm:mb-3 text-center sm:text-left uppercase tracking-wide">
            <Reveal width="100%">Education</Reveal>
          </h4>
          <FeaturedCard
            icon={
              <div className="rounded-xl bg-blue-600 p-3.5 dark:bg-blue-400">
                <FaGraduationCap className="h-5 w-5 text-white" />
              </div>
            }
            title="Saintgits College of Engineering"
            subtitle="2021 - 2025 | Kerala, India"
            desc="Bachelor of Technology in Computer Science and Engineering"
          />
          <h4 className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mt-8 mb-4 sm:mb-3 text-center sm:text-left uppercase tracking-wide">
            <Reveal width="100%">Achievements</Reveal>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeaturedCard
              title="Winner, Yukthi 2024 Hackathon"
              desc="Built a GPT-powered automation bot."
              className="mt-0"
            />
            <FeaturedCard
              title="Research Intern"
              desc="Published two peer-reviewed papers at NCCU, Taiwan."
              className="mt-0"
            />
          </div>
        </div>
      </motion.div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <BlurCircles />
        </motion.div>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative pt-10 md:pt-5 lg:pt-0"
        >
          <Quote />
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
