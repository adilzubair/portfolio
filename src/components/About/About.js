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
        alt=""
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
            Software Engineer based in Dubai, UAE. Experienced in building
            scalable backend and frontend systems with Go, Python, JavaScript, and
            cloud-native tools. Passionate about AI, automation, and clean, modern
            web experiences.
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
                  Developed full-stack applications using Python and JavaScript,
                  with React frontends and FastAPI/gRPC backends for secure
                  transaction management and distributed system operations.
                </li>
                <li>
                  Built interactive chatbots and API clients for real-time
                  operations, authentication, and data processing across
                  distributed networks.
                </li>
                <li>
                  Designed and implemented Bitcoin wallet applications, supporting
                  multisig wallets, transaction history, and fee estimation.
                </li>
                <li>
                  Developed a Lightning Network Telegram bot to manage node
                  operations, invoices, and peer connections via LND APIs.
                </li>
                <li>
                  Created and maintained REST/gRPC APIs for Lightning interactions,
                  enabling payment processing, routing, and custom messaging.
                </li>
                <li>
                  Implemented simulations for consensus algorithms, Bitcoin mining
                  (proof-of-work), and transaction validation scripts, integrating
                  databases and cryptographic libraries.
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
                  Designed and deployed an automated stakeholder alert system
                  triggered on new customer registrations, supporting platform
                  scalability toward a 100K+ user base.
                </li>
                <li>
                  Resolved high-priority production bugs impacting performance for
                  1,000+ users, significantly improving application stability.
                </li>
                <li>
                  Reduced post-registration email delivery time by 90% by
                  optimizing the email automation pipeline.
                </li>
                <li>
                  Developed and maintained scalable microservices in Golang and
                  Python using RESTful APIs, RabbitMQ, and async I/O (e.g.,
                  asyncio).
                </li>
                <li>
                  Integrated JWT-based authentication and OAuth for secure API
                  access in user services.
                </li>
                <li>
                  Optimized PostgreSQL queries and schema migrations using
                  SQLAlchemy, reducing response times by 40%.
                </li>
                <li>
                  Implemented a transactional number swap API with full audit
                  logging and admin controls, supporting encryption.
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
                  Developed and deployed a large language model (LLM) chatbot
                  pipeline on Intel CPUs, leveraging OpenVINO™ for model
                  optimization and accelerated inference.
                </li>
                <li>
                  Automated conversion, quantization, and deployment of LLMs for
                  efficient GenAI applications on consumer edge hardware.
                </li>
                <li>
                  Built a customizable Gradio web UI enabling real-time
                  interactions with LLMs and configurable inference parameters.
                </li>
                <li>
                  Demonstrated expertise in LLM fine-tuning, pipeline automation,
                  and low-latency deployment of advanced models.
                </li>
                <li>
                  Integrated model lifecycle processes into CI/CD using GitHub
                  Actions and optimized inference workflows.
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
            title="2021 - 2025"
            desc="B.Tech in Computer Science and Engineering, Saintgits College of Engineering, Kerala, India."
          />
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
