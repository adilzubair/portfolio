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
      className="w-full bg-gray-50 dark:bg-neutral-900 rounded-xl p-3 sm:p-4 group shadow-lg shadow-gray-400/50 dark:shadow-black/30 z-20"
    >
      <div>
        <a href={`${live || code}`}>
          <div className={`h-[160px] sm:h-[180px] md:h-[200px] w-full relative rounded-xl overflow-hidden flex items-center justify-center ${
            thumbnail ? 'bg-white dark:bg-neutral-800' : 'bg-gradient-to-br from-blue-500 to-blue-700'
          }`}>
            {thumbnail ? (
              <img
                src={thumbnail}
                className="w-full h-full object-contain transition-all duration-300 group-hover:scale-105 group-hover:rotate-1"
                alt="Project thumbnail"
              />
            ) : (
              <div className="text-white text-3xl sm:text-4xl font-bold opacity-50">
                {title?.charAt(0) || "P"}
              </div>
            )}

            <div className="absolute top-0 bottom-0 left-0 right-0 bg-neutral-900/50 transition-all duration-300 cursor-pointer group-hover:opacity-0" />
          </div>
        </a>
      </div>

      <div>
        <div className="flex items-center justify-between my-3 sm:my-4">
          <BsFillBookmarkStarFill className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400" />

          <div
            className={
              "flex justify-end items-center gap-2 sm:gap-3 text-neutral-700 dark:text-neutral-300"
            }
          >
            {live && (
              <a
                href={`${live}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 p-1.5 sm:p-2 rounded-md dark:bg-neutral-800 bg-neutral-200 transition-all duration-300 hover:scale-110 text-lg sm:text-xl"
              >
                <BiLinkAlt />
              </a>
            )}

            {code && (
              <a
                href={`${code}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 p-1.5 sm:p-2 rounded-md dark:bg-neutral-800 bg-neutral-200 transition-all duration-300 hover:scale-90 text-lg sm:text-xl"
              >
                <FaGithub />
              </a>
            )}
          </div>
        </div>

        <h1 className="text-lg sm:text-xl font-medium mb-2 sm:mb-1"> {title} </h1>
        <p className="dark:text-neutral-200 text-neutral-600 text-xs sm:text-sm text-justify leading-relaxed">
          {" "}
          {description}{" "}
        </p>

        <div className="flex justify-center dark:text-neutral-300 text-neutral-700 mt-4 sm:mt-6 gap-x-2 sm:gap-x-3 gap-y-2 flex-wrap">
          {tech.map((e, i) => (
            <span
              className="px-2 py-1 sm:p-2 rounded-md dark:bg-neutral-800 bg-neutral-200 text-xs"
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
