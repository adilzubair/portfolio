import { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineCaretDown } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { motion } from "framer-motion";
import analytics from "../../utils/analytics";

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="flex justify-center z-30 "
    >
      <div onClick={() => setOpen(!open)} className="relative">
        <button className="flex items-center p-3 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-slate-800/50 rounded-xl shadow-lg shadow-blue-200/30 dark:shadow-black/30 border border-blue-200/50 dark:border-blue-800/30 hover:scale-105 transition-transform">
          <AiOutlineCaretDown className="w-4 h-4 text-blue-600 dark:text-blue-300" />
        </button>
        <ul
          className={`absolute right-0 w-48 py-2 mt-3 rounded-xl z-40 shadow-2xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border-2 border-blue-100 dark:border-blue-900/30 duration-700 ease-in-out overflow-hidden ${
            open ? "block" : "hidden"
          }`}
        >
          <li className="border-b dark:border-blue-900/20 border-blue-100">
            <Link
              to="about"
              smooth={true}
              offset={-30}
              duration={800}
              onClick={() => setOpen(!open)}
              className="cursor-pointer flex w-full items-center px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-300 transition-all"
            >
              Overview
            </Link>
          </li>
          <li className="border-b dark:border-blue-900/20 border-blue-100">
            <Link
              to="skills"
              smooth={true}
              offset={-40}
              duration={800}
              onClick={() => setOpen(!open)}
              className="cursor-pointer flex w-full items-center px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-300 transition-all"
            >
              Expertise
            </Link>
          </li>
          <li className="border-b dark:border-blue-900/20 border-blue-100">
            <Link
              to="projects"
              smooth={true}
              offset={-40}
              duration={800}
              onClick={() => setOpen(!open)}
              className="cursor-pointer flex w-full items-center px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-300 transition-all"
            >
              Projects
            </Link>
          </li>
          <li className="border-b dark:border-blue-900/20 border-blue-100">
            <Link
              to="contact"
              smooth={true}
              offset={-40}
              duration={800}
              onClick={() => setOpen(!open)}
              className="cursor-pointer flex w-full items-center px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-300 transition-all"
            >
              Contact
            </Link>
          </li>
          <li className="bg-gradient-to-r from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/10">
            <a
              href="/resume.pdf"
              download="Muhamed_Adil_Resume.pdf"
              onClick={() => {
                setOpen(!open);
                analytics.trackResumeDownload();
              }}
              className="cursor-pointer flex w-full items-center px-4 py-3 text-sm hover:bg-blue-100 dark:hover:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-bold transition-all"
            >
              <HiOutlineDocumentText className="mr-2 w-5 h-5" />
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
