import { FiMoon, FiSun } from "react-icons/fi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useReadingProgress } from "../Common/Progress";
import ProfileMenu from "./ProfileMenu";
import analytics from "../../utils/analytics";

const HeaderNav = ({ darkMode, setDarkMode }) => {
  const completion = useReadingProgress();

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sm:container sm:mx-auto"
    >
      <div
        className={`fixed inset-x-0 block sm:flex sm:justify-between sm:items-center text-gray-900 dark:text-white top-0 z-40 md:justify-around py-3 md:py-4 bg-white/80 dark:bg-[#0d0c0e]/80 backdrop-filter backdrop-blur-xl bg-opacity-30 ease-in-out duration-700 border-b border-blue-100/50 dark:border-blue-900/30 shadow-lg shadow-blue-100/20 dark:shadow-black/20 sm:mx-4 sm:mt-4 sm:rounded-2xl sm:border sm:border-blue-200/50 sm:dark:border-blue-800/30`}
      >
        <span
          id="progress-bar"
          style={{
            transform: `translateX(${completion - 100}%)`,
          }}
          className={`absolute top-0 w-full transition-transform duration-300 h-[3px] bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 dark:from-blue-400 dark:via-blue-300 dark:to-blue-400 shadow-lg shadow-blue-500/50 sm:rounded-t-2xl`}
        />

        <div className="flex justify-between items-center md:ml-5 px-4 sm:px-0">
          <Link to="hero" smooth={true} offset={-70} duration={800}>
            <motion.h1
              initial={{ x: -50, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl text-slate-800 dark:text-slate-100 font-bold cursor-pointer"
            >
              Muhamed Adil &nbsp;
              <span className="font-extrabold bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">Portfolio</span>
            </motion.h1>
          </Link>

          <motion.div
            initial={{ x: 50, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="sm:hidden flex items-center gap-3"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={() => {
                setDarkMode(!darkMode);
                analytics.trackThemeToggle(!darkMode ? 'dark' : 'light');
              }}
              aria-label="Theme Switcher"
              className="block sm:hidden ml-0 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-slate-800/50 cursor-pointer p-3 rounded-xl duration-200 shadow-lg shadow-blue-200/30 dark:shadow-black/30 group border border-blue-200/50 dark:border-blue-800/30 hover:scale-105 transition-transform"
            >
              {darkMode ? (
                <FiSun className="text-xl md:text-2xl cursor-pointer text-blue-600 dark:text-blue-300 group-hover:text-blue-500 dark:group-hover:text-blue-200 duration-150 group-hover:rotate-90 transition-transform" />
              ) : (
                <FiMoon className="text-xl md:text-2xl cursor-pointer text-blue-600 dark:text-blue-400 group-hover:text-blue-700 duration-150 group-hover:-rotate-12 transition-transform" />
              )}
            </motion.div>

            <ProfileMenu />
          </motion.div>
        </div>

        <motion.div
          initial={{ x: 50, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden sm:flex justify-between items-center flex-row px-5"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => {
              setDarkMode(!darkMode);
              analytics.trackThemeToggle(!darkMode ? 'dark' : 'light');
            }}
            aria-label="Theme Switcher"
            className="ml-4 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-slate-800/50 cursor-pointer p-3 rounded-xl shadow-lg shadow-blue-200/30 dark:shadow-black/30 group border border-blue-200/50 dark:border-blue-800/30 hover:scale-105 transition-transform"
          >
            {darkMode ? (
              <FiSun className="text-xl md:text-2xl cursor-pointer text-blue-600 dark:text-blue-300 group-hover:text-blue-500 dark:group-hover:text-blue-200 duration-150 group-hover:rotate-90 transition-transform" />
            ) : (
              <FiMoon className="text-xl md:text-2xl cursor-pointer text-blue-600 dark:text-blue-400 group-hover:text-blue-700 duration-150 group-hover:-rotate-12 transition-transform" />
            )}
          </motion.div>

          <div className="ml-5">
            <ProfileMenu />
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default HeaderNav;
