import { motion } from "framer-motion";

import { NextJsIcon, ReactIcon, VSCodeIcon } from "./Icons";

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

function HeaderTechStack() {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <motion.p
        className="mb-3 text-base sm:text-lg md:text-xl font-semibold text-[#7000ff] dark:text-[#7000ff] text-center"
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        Current favorite tech stack/tools:
      </motion.p>
      <motion.ul
        className="flex items-center gap-4 sm:gap-3.5 text-slate-600 dark:text-slate-300"
        initial="hide"
        animate="show"
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      >
        <motion.li variants={animation}>
          <div className="transition duration-200 hover:text-[#61DAFB]">
            <ReactIcon className="h-7 w-7 sm:h-6 sm:w-6 md:h-8 md:w-8" />
          </div>
        </motion.li>

        <motion.li variants={animation}>
          <div className="transition duration-200 hover:text-[#000000] dark:hover:text-[#FFFFFF]">
            <NextJsIcon className="h-7 w-7 sm:h-6 sm:w-6 md:h-8 md:w-8" />
          </div>
        </motion.li>
        <motion.li variants={animation}>
          <div className="h-4 sm:h-3 md:h-5 w-[1px] bg-slate-400 dark:bg-neutral-700" />
        </motion.li>
        <motion.li variants={animation}>
          <div className="transition duration-200 hover:text-[#007ACC]">
            <VSCodeIcon className="h-7 w-7 sm:h-6 sm:w-6 md:h-8 md:w-8" />
          </div>
        </motion.li>
      </motion.ul>
    </div>
  );
}

export default HeaderTechStack;
