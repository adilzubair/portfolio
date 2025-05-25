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
        className="md:px-20 px-5 flex flex-col md:flex-row gap-10"
      >
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">
            Hi, I am Muhamed Adil Edavana Valappil
          </h2>
          <p className="mb-4 text-lg">
            Software Engineer based in Dubai, UAE. Experienced in building
            scalable backend and frontend systems with Go, Python, JavaScript, and
            cloud-native tools. Passionate about AI, automation, and clean, modern
            web experiences.
          </p>
          <h4 className="text-2xl font-medium text-blue-600 dark:text-blue-400 mt-6 mb-2">
            <Reveal width="100%">Work Experience</Reveal>
          </h4>
          <FeaturedCard
            icon={
              <div className="rounded-xl bg-blue-600 p-3.5 dark:bg-blue-400">
                <HiOutlineBuildingOffice className="h-5 w-5 text-white" />
              </div>
            }
            title="May 2025 - Present"
            desc="Software Engineer at Cooee (Remote, Australia-based). Built and maintained backend services using Golang, with message-driven architecture powered by RabbitMQ.
Worked extensively with PostgreSQL, implementing optimized queries and schema migrations.
Integrated AWS services including CloudWatch, Elastic Beanstalk, CodePipeline, and security tools like WAF
and Shield to ensure resilient deployment."
          />
          <FeaturedCard
            icon={
              <div className="rounded-xl bg-blue-600 p-3.5 dark:bg-blue-400">
                <HiOutlineBuildingOffice className="h-5 w-5 text-white" />
              </div>
            }
            title="May 2024 - July 2024"
            desc="Industrial Trainee at Intel Corporation (Bangalore, India). Optimized the TinyLlama model with Intel® OpenVINO™ for low-latency AI inference on edge devices.
Built and deployed scalable backend microservices using FastAPI and Docker, integrated with REST APIs for
real-time chatbot simulation using Gradio."
          />
          <FeaturedCard
            icon={
              <div className="rounded-xl bg-blue-600 p-3.5 dark:bg-blue-400">
                <HiOutlineBuildingOffice className="h-5 w-5 text-white" />
              </div>
            }
            title="Aug 2023 - Sep 2023"
            desc="Data Analyst Intern at Al Wafaa Group (Dubai, UAE). Automated lead processing workflows and supported CRM data pipelines with advanced reporting.
Built interactive dashboards using IBM Cognos, MS Excel, and Python, improving decision-making and data
transparency."
          />
          <h4 className="text-2xl font-medium text-blue-600 dark:text-blue-400 mt-6 mb-2">
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
