import { FiMoon, FiSun } from "react-icons/fi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useReadingProgress } from "../Common/Progress";
import ProfileMenu from "./ProfileMenu";

const HeaderNav = ({ darkMode, setDarkMode }) => {
  const completion = useReadingProgress();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="nav"
      className="fixed top-6 left-6 right-6 z-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative glass border-gradient-rounded overflow-hidden">
          {/* Enhanced Progress Bar */}
          <span
            id="progress-bar"
            style={{
              transform: `translateX(${completion - 100}%)`,
            }}
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-transform duration-300 z-10"
          />

          {/* Floating orb effects */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full blur-sm animate-float"></div>
          <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500/20 rounded-full blur-sm animate-float-delayed"></div>

          <div className="relative flex justify-between items-center px-8 py-5">
            {/* Logo Section */}
            <Link to="hero" smooth={true} offset={-70} duration={800}>
              <motion.div
                initial={{ x: -50, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
              >
                <h1 className="text-xl sm:text-2xl font-light text-gray-800 dark:text-white">
                  Muhamed Adil &nbsp;
                  <span className="font-bold gradient-text">
                    Portfolio
                  </span>
                </h1>
              </motion.div>
            </Link>

            {/* Desktop Navigation & Controls */}
            <div className="flex items-center gap-4">
              {/* Theme Switcher */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Theme Switcher"
                className="glass-button p-3 rounded-2xl cursor-pointer group"
              >
                {darkMode ? (
                  <FiSun className="text-xl text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
                ) : (
                  <FiMoon className="text-xl text-gray-600 dark:text-gray-300 group-hover:text-blue-500 transition-colors duration-300" />
                )}
              </motion.div>

              {/* Profile Menu */}
              <ProfileMenu />
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default HeaderNav;
