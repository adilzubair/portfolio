import React from "react";
import Section from "../Common/Section";
import { motion } from "framer-motion";
import FeaturedCard from "../FeatureCard/FeaturedCard";
import { FaGraduationCap } from "react-icons/fa";
import RightSvg from "../../assets/svg/right-pattern.svg";
import { Reveal } from "../Common/Reveal";
import { HiOutlineBuildingOffice } from "react-icons/hi2";

const About = () => {
  return (
    <Section
      id="about"
      title="Overview"
      subtitle="Software Engineer"
      className="relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500 rounded-full opacity-5 blur-3xl float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500 rounded-full opacity-5 blur-3xl float" style={{animationDelay: '2s'}}></div>
      
      <img
        src={RightSvg}
        alt=""
        className="absolute hidden right-0 bottom-[40%] w-2/12 max-w-xs md:block opacity-20"
        loading="lazy"
        height={700}
        width={320}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full px-2 sm:px-4 md:px-8 lg:px-20 flex flex-col gap-4 sm:gap-6 md:gap-10"
      >
        {/* Main Content with Glass Effect */}
        <div className="glass dark:glass-dark rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-modern glow-hover">
          <div className="flex-1">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6 text-center sm:text-left gradient-text leading-tight">
              Hi, I am Muhamed Adil 
            </h2>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg text-center sm:text-left leading-relaxed text-neutral-600 dark:text-neutral-300">
              Software Engineer based in Dubai, UAE. Experienced in building
              scalable backend and frontend systems with Go, Python, JavaScript, and
              cloud-native tools. Passionate about AI, automation, and clean, modern
              web experiences.
            </p>
            
            <h4 className="text-lg sm:text-xl md:text-2xl font-medium gradient-text mt-6 sm:mt-8 mb-4 sm:mb-6 text-center sm:text-left">
              <Reveal width="100%">Work Experience</Reveal>
            </h4>
            
            {/* Enhanced Featured Card Container */}
            <div className="glass dark:glass-dark rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-modern hover:shadow-2xl transition-all duration-300">
              <FeaturedCard
                icon={
                  <div className="gradient-border rounded-xl">
                    <div className="gradient-border-content dark:gradient-border-content-dark p-2.5 sm:p-3.5">
                      <HiOutlineBuildingOffice className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                }
                title="Full Stack Developer at Cooee"
                subtitle="May 2025 - Present | Remote, Australia"
                desc="Built and maintained backend services using Golang, with message-driven architecture powered by RabbitMQ.
Worked extensively with PostgreSQL, implementing optimized queries and schema migrations.
Integrated AWS services including CloudWatch, Elastic Beanstalk, CodePipeline, and security tools like WAF
and Shield to ensure resilient deployment."
              />
            </div>
            
            <div className="glass dark:glass-dark rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-modern hover:shadow-2xl transition-all duration-300 mt-3 sm:mt-4">
              <FeaturedCard
                icon={
                  <div className="gradient-border rounded-xl">
                    <div className="gradient-border-content dark:gradient-border-content-dark p-2.5 sm:p-3.5">
                      <HiOutlineBuildingOffice className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                }
                title="Industrial Trainee at Intel Corporation"
                subtitle="May 2024 - July 2024 | Bangalore, India"
                desc="Optimized the TinyLlama model with Intel® OpenVINO™ for low-latency AI inference on edge devices.
Built and deployed scalable backend microservices using FastAPI and Docker, integrated with REST APIs for
real-time chatbot simulation using Gradio."
              />
            </div>
            
            <div className="glass dark:glass-dark rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-modern hover:shadow-2xl transition-all duration-300 mt-3 sm:mt-4">
              <FeaturedCard
                icon={
                  <div className="gradient-border rounded-xl">
                    <div className="gradient-border-content dark:gradient-border-content-dark p-2.5 sm:p-3.5">
                      <HiOutlineBuildingOffice className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                }
                title="Data Analyst Intern at Al Wafaa Group"
                subtitle="Aug 2023 - Sep 2023 | Dubai, UAE"
                desc="Automated lead processing workflows and supported CRM data pipelines with advanced reporting.
Built interactive dashboards using IBM Cognos, MS Excel, and Python, improving decision-making and data
transparency."
              />
            </div>
            
            <div className="glass dark:glass-dark rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-modern hover:shadow-2xl transition-all duration-300 mt-3 sm:mt-4">
              <FeaturedCard
                icon={
                  <div className="gradient-border rounded-xl">
                    <div className="gradient-border-content dark:gradient-border-content-dark p-2.5 sm:p-3.5">
                      <HiOutlineBuildingOffice className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                }
                title="Research Intern at National Chung Cheng University"
                subtitle="July 2024 - September 2024 | Chiayi, Taiwan"
                desc="Conducted research on advanced machine learning algorithms and their applications in real-world scenarios.
Collaborated with faculty on developing innovative solutions for data processing and analysis, contributing to academic publications and research projects."
              />
            </div>
            
            {/* Modern Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-6 sm:my-8"></div>
            
            <h4 className="text-lg sm:text-xl md:text-2xl font-medium gradient-text mt-4 sm:mt-6 mb-4 sm:mb-6 text-center sm:text-left">
              <Reveal width="100%">Education</Reveal>
            </h4>
            
            <div className="glass dark:glass-dark rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-modern hover:shadow-2xl transition-all duration-300">
              <FeaturedCard
                icon={
                  <div className="gradient-border rounded-xl">
                    <div className="gradient-border-content dark:gradient-border-content-dark p-2.5 sm:p-3.5">
                      <FaGraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                }
                title="2021 - 2025"
                desc="B.Tech in Computer Science and Engineering, Saintgits College of Engineering, Kerala, India."
              />
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default About;
