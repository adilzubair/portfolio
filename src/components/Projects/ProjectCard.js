import React from "react";
import { motion } from "framer-motion";
import LazyImage from "../Common/LazyImage";
import { imageDimensions } from "./Constants";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { motionStep } from "./Motion";
import { BiLinkAlt } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

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
      className="w-full bg-gradient-to-br from-white to-blue-50/20 dark:from-[#0a0a0a] dark:to-blue-950/10 border-2 border-blue-100 dark:border-blue-900/30 rounded-2xl p-4 sm:p-5 group shadow-xl hover:shadow-2xl shadow-gray-300/50 dark:shadow-black/50 z-20 transition-all duration-300 hover:-translate-y-2"
    >
      <div>
        <a href={`${live || code}`}>
          <div className={`h-[160px] sm:h-[180px] md:h-[200px] w-full relative rounded-xl overflow-hidden flex items-center justify-center border-2 border-blue-100/50 dark:border-blue-900/30 ${
            thumbnail ? 'bg-white dark:bg-neutral-800' : 'bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600'
          }`}>
            {thumbnail ? (
              <LazyImage
                src={thumbnail}
                className="w-full h-full object-contain transition-all duration-300 group-hover:scale-105 group-hover:rotate-1"
                alt={`${title} thumbnail`}
                width={imageDimensions[thumbnail]?.width}
                height={imageDimensions[thumbnail]?.height}
              />
            ) : (
              <div className="text-white text-3xl sm:text-4xl font-bold opacity-50">
                {title?.charAt(0) || "P"}
              </div>
            )}

            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-900/60 to-transparent transition-all duration-300 cursor-pointer group-hover:opacity-0" />
          </div>
        </a>
      </div>

      <div>
        <div className="flex items-center justify-between my-4 sm:my-5">
          <BsFillBookmarkStarFill className="text-2xl sm:text-3xl text-blue-600 dark:text-blue-400" />

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

        <h1 className="text-lg sm:text-xl font-bold mb-2 sm:mb-1 text-slate-800 dark:text-slate-100"> {title} </h1>
        <p className="dark:text-slate-300 text-slate-600 text-xs sm:text-sm text-justify leading-relaxed">
          {" "}
          {description}{" "}
        </p>

        <div className="flex justify-center dark:text-neutral-300 text-neutral-700 mt-5 sm:mt-6 gap-x-2 sm:gap-x-3 gap-y-2 flex-wrap">
          {tech.map((e, i) => (
            <span
              className="px-3 py-1.5 sm:p-2 rounded-lg bg-blue-100/70 dark:bg-blue-900/30 text-xs font-medium border border-blue-200 dark:border-blue-800/30 text-blue-700 dark:text-blue-300"
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
