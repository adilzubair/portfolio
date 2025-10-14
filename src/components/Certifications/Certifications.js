import React from "react";
import Section from "../Common/Section";
import { motion } from "framer-motion";
import { HiOutlineAcademicCap, HiOutlineTrophy } from "react-icons/hi2";
import { Reveal } from "../Common/Reveal";

const certifications = [
  {
    title: "AI & Machine Learning",
    issuer: "Intel Corporation",
    date: "2024",
    description: "Advanced training in LLM optimization and OpenVINO deployment",
    icon: <HiOutlineAcademicCap className="h-6 w-6 text-white" />,
  },
  {
    title: "Blockchain Development",
    issuer: "Ethereum Foundation",
    date: "2024",
    description: "Smart contract development and Web3 integration",
    icon: <HiOutlineAcademicCap className="h-6 w-6 text-white" />,
  },
  {
    title: "Cloud Architecture",
    issuer: "AWS",
    date: "2023",
    description: "Cloud infrastructure and serverless architecture design",
    icon: <HiOutlineAcademicCap className="h-6 w-6 text-white" />,
  },
];

const achievements = [
  {
    title: "Best Innovation Award",
    event: "College Hackathon 2024",
    description: "Won for developing AI-powered answer sheet evaluator",
  },
  {
    title: "Research Publication",
    event: "IEEE Conference 2024",
    description: "Published paper on hyperspectral imaging analysis",
  },
  {
    title: "Open Source Contributor",
    event: "GitHub",
    description: "Active contributor to multiple open-source projects",
  },
];

const Certifications = () => {
  return (
    <Section
      id="certifications"
      title="Certifications & Achievements"
      subtitle="Professional certifications and notable accomplishments"
      className="relative"
    >
      <div className="px-4 sm:px-5 md:px-20 space-y-12">
        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">
            <Reveal width="100%">Certifications</Reveal>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-100 dark:bg-[#101111] rounded-xl p-6 shadow-lg shadow-gray-400/30 dark:shadow-black/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-blue-600 p-3 dark:bg-blue-400 flex-shrink-0">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-1">{cert.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-2">
                      {cert.date}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400">
            <Reveal width="100%">Achievements</Reveal>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-xl p-6 border border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <HiOutlineTrophy className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">{achievement.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {achievement.event}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Certifications;
