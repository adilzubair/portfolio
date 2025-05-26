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
      <div className="col-span-12 sm:col-span-7 relative">
        <a href={`${live || code}`}>
          <div className={`h-[250px] sm:h-[300px] md:h-[350px] w-full relative rounded-xl overflow-hidden flex items-center justify-center ${
            thumbnail ? 'bg-white dark:bg-neutral-800' : 'bg-gradient-to-br from-blue-500 to-blue-700'
          }`}>
            {thumbnail ? (
              <img
                src={thumbnail}
                layout="fill"
                className="w-full h-full transition-all object-contain duration-300 group-hover:scale-105 group-hover:rotate-1"
                alt="Project thumbnail"
              />
            ) : (
              <div className="text-white text-4xl sm:text-5xl md:text-6xl font-bold opacity-50">
                {title?.charAt(0) || "P"}
              </div>
            )}
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
          <p className="text-blue-600 dark:text-blue-400 text-sm"> Highlight </p>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-neutral-700 dark:text-neutral-300 mb-3 sm:mb-4">
            {title}
          </h1>

          <div className="my-3 sm:my-4 md:my-6 p-3 sm:p-4 md:p-6 bg-gray-50 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 shadow-xl shadow-gray-400/50 dark:shadow-black/30 rounded-xl">
            <p className="text-xs sm:text-sm md:text-base text-justify leading-relaxed"> {description && description} </p>
          </div>

          <div
            className={`flex text-blue-600 font-extrabold gap-x-2 sm:gap-x-4 justify-start sm:justify-end flex-wrap text-xs sm:text-sm ${
              secondary && "!justify-start ml-0"
            }`}
          >
            {tech.map((e, i) => (
              <span className="mb-1" key={i}>
                {e}
              </span>
            ))}
          </div>

          <div
            className={`flex justify-start sm:justify-end mt-4 sm:mt-5 gap-2 sm:gap-3 dark:text-neutral-300 text-neutral-700 ${
              secondary && "!justify-start"
            }`}
          >
            {live && (
              <a
                href={`${live}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 p-2 rounded-md dark:bg-neutral-800 bg-neutral-300 transition-all duration-300 hover:scale-110 text-xl sm:text-2xl border-black/10 shadow-md shadow-gray-400/50 dark:shadow-black/20"
              >
                <BiLinkAlt />
              </a>
            )}

            {code && (
              <a
                href={`${code}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 p-2 rounded-md dark:bg-neutral-800 bg-neutral-300 transition-all duration-300 hover:scale-90 text-xl sm:text-2xl border-black/10 shadow-md shadow-gray-400/50 dark:shadow-black/20"
              >
                <FaGithub />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative grid grid-cols-12 items-center gap-3 group ">
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
