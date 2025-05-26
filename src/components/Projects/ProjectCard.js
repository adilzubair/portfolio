import React from "react";
import { motion } from "framer-motion";
//
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { motionStep } from "./Motion";
import { BiLinkAlt } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
//

const ProjectCard = ({ live, thumbnail, code, title, description, tech }) => {
  return (
    <motion.div
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 15,
            stiffness: 50,
          },
        },

        hidden: {
          opacity: 0,
          y: 50,
          transition: {
            type: "spring",
            damping: 15,
            stiffness: 1 * 20 + 50,
          },
        },
      }}
      {...motionStep}
      className="w-full glass dark:glass-dark rounded-2xl p-4 sm:p-5 group shadow-modern hover:shadow-2xl transition-all duration-500 glow-hover"
    >
      <div className="relative">
        <a href={`${live || code}`} className="block group">
          <div className={`h-[160px] sm:h-[180px] md:h-[200px] w-full relative rounded-xl overflow-hidden flex items-center justify-center transition-all duration-500 group-hover:scale-[1.02] ${
            thumbnail ? 'bg-white dark:bg-neutral-800' : 'bg-gradient-to-br from-blue-500 to-blue-700'
          }`}>
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl z-10"></div>
            
            {thumbnail ? (
              <img
                src={thumbnail}
                className="w-full h-full object-contain transition-all duration-500 group-hover:scale-105"
                alt="Project thumbnail"
              />
            ) : (
              <div className="text-white text-3xl sm:text-4xl font-bold opacity-50 group-hover:opacity-80 transition-opacity duration-300">
                {title?.charAt(0) || "P"}
              </div>
            )}
            
            {/* Hover overlay with quick access */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3 z-20">
              {live && (
                <div className="glass dark:glass-dark p-2 rounded-full hover:scale-110 transition-transform duration-200">
                  <BiLinkAlt className="text-white text-lg" />
                </div>
              )}
              {code && (
                <div className="glass dark:glass-dark p-2 rounded-full hover:scale-110 transition-transform duration-200">
                  <FaGithub className="text-white text-lg" />
                </div>
              )}
            </div>
          </div>
        </a>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="gradient-border rounded-lg">
            <div className="gradient-border-content dark:gradient-border-content-dark p-2">
              <BsFillBookmarkStarFill className="text-lg sm:text-xl text-blue-600 dark:text-blue-400" />
            </div>
          </div>

          <div className="flex justify-end items-center gap-2 sm:gap-3 text-neutral-700 dark:text-neutral-300">
            {live && (
              <a
                href={`${live}`}
                target="_blank"
                rel="noreferrer"
                className="glass dark:glass-dark hover:gradient-text p-2 rounded-lg transition-all duration-300 hover:scale-110 text-lg sm:text-xl"
              >
                <BiLinkAlt />
              </a>
            )}

            {code && (
              <a
                href={`${code}`}
                target="_blank"
                rel="noreferrer"
                className="glass dark:glass-dark hover:gradient-text p-2 rounded-lg transition-all duration-300 hover:scale-110 text-lg sm:text-xl"
              >
                <FaGithub />
              </a>
            )}
          </div>
        </div>

        <h1 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3 hover:gradient-text transition-all duration-300 cursor-default">
          {title}
        </h1>
        <p className="dark:text-neutral-200 text-neutral-600 text-xs sm:text-sm text-justify leading-relaxed mb-4">
          {description}
        </p>

        <div className="flex justify-center dark:text-neutral-300 text-neutral-700 gap-x-2 sm:gap-x-3 gap-y-2 flex-wrap">
          {tech.map((e, i) => (
            <span
              className="glass dark:glass-dark px-3 py-1.5 rounded-full text-xs hover:gradient-text hover:scale-105 transition-all duration-200 cursor-default"
              key={i}
            >
              {e}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
