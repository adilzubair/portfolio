import React from "react";
import { BiLinkAlt } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

const Featured = ({
  secondary,
  live,
  thumbnail,
  code,
  title,
  description,
  tech,
}) => {
  const __renderImage = () => {
    return (
      <div className="col-span-12 sm:col-span-7 relative group">
        <a href={`${live || code}`}>
          <div className={`h-[250px] sm:h-[300px] md:h-[350px] w-full relative rounded-xl overflow-hidden flex items-center justify-center transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl ${
            thumbnail ? 'bg-white dark:bg-neutral-800 shadow-modern dark:shadow-modern' : 'bg-gradient-to-br from-blue-500 to-blue-700'
          }`}>
            {/* Glass overlay on hover */}
            <div className="absolute inset-0 glass dark:glass-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
            
            {thumbnail ? (
              <img
                src={thumbnail}
                layout="fill"
                className="w-full h-full transition-all object-contain duration-500 group-hover:scale-105"
                alt="Project thumbnail"
              />
            ) : (
              <div className="text-white text-4xl sm:text-5xl md:text-6xl font-bold opacity-50 group-hover:opacity-80 transition-opacity duration-300">
                {title?.charAt(0) || "P"}
              </div>
            )}
            
            {/* Hover overlay with links */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 z-20">
              {live && (
                <a 
                  href={live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass dark:glass-dark p-3 rounded-full hover:scale-110 transition-transform duration-200"
                >
                  <BiLinkAlt className="text-white text-xl" />
                </a>
              )}
              {code && (
                <a 
                  href={code} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass dark:glass-dark p-3 rounded-full hover:scale-110 transition-transform duration-200"
                >
                  <FaGithub className="text-white text-xl" />
                </a>
              )}
            </div>
          </div>
        </a>
      </div>
    );
  };

  const __renderContent = () => {
    return (
      <div
        className={`col-span-12 sm:col-span-5 ${
          secondary 
            ? `text-left` 
            : `text-left sm:text-right sm:relative sm:z-10`
        }`}
      >
        <div className="mt-4 sm:mt-0 px-2 sm:px-0">
          <div className="glass dark:glass-dark rounded-2xl p-6 shadow-modern hover:shadow-2xl transition-all duration-300 glow-hover">
            <p className="gradient-text text-sm font-semibold"> Highlight </p>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-neutral-700 dark:text-neutral-300 mb-3 sm:mb-4 hover:gradient-text transition-all duration-300">
              {title}
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed text-justify">
              {description}
            </p>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {tech?.map((each, i) => (
                <span
                  key={i}
                  className="glass dark:glass-dark px-3 py-1 text-xs sm:text-sm rounded-full text-neutral-600 dark:text-neutral-400 hover:gradient-text hover:scale-105 transition-all duration-200 cursor-default"
                >
                  {each}
                </span>
              ))}
            </div>
            
            <div className="mt-6 flex gap-4">
              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-border rounded-lg hover:scale-105 transition-transform duration-200"
                >
                  <div className="gradient-border-content dark:gradient-border-content-dark px-4 py-2 flex items-center gap-2 text-sm font-medium">
                    <BiLinkAlt />
                    Live Demo
                  </div>
                </a>
              )}
              {code && (
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass dark:glass-dark px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium hover:scale-105 transition-transform duration-200"
                >
                  <FaGithub />
                  Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative grid grid-cols-12 items-center gap-3 group">
      {secondary ? (
        <>
          {__renderContent()}
          {__renderImage()}
        </>
      ) : (
        <>
          {__renderImage()}
          {__renderContent()}
        </>
      )}
    </div>
  );
};

export default Featured;
