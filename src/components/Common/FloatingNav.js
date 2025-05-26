import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp, FaHome, FaUser, FaBriefcase, FaCog, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const navItems = [
    { id: "hero", icon: FaHome, label: "Home" },
    { id: "about", icon: FaUser, label: "About" },
    { id: "skills", icon: FaCog, label: "Skills" },
    { id: "projects", icon: FaBriefcase, label: "Projects" },
    { id: "contact", icon: FaEnvelope, label: "Contact" },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0, x: 100 }}
          className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-50"
        >
          {/* Main Floating Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="glass dark:glass-dark p-4 rounded-full shadow-modern cursor-pointer mb-4 glow-hover"
          >
            <motion.div
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaArrowUp className="text-xl text-blue-600 dark:text-blue-400" />
            </motion.div>
          </motion.div>

          {/* Navigation Menu */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="flex flex-col gap-2"
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.id}
                      smooth={true}
                      offset={-70}
                      duration={800}
                      onClick={() => setIsExpanded(false)}
                      className="glass dark:glass-dark p-3 rounded-full shadow-modern cursor-pointer hover:scale-110 transition-transform duration-200 flex items-center gap-3 group"
                    >
                      <item.icon className="text-lg text-blue-600 dark:text-blue-400" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingNav;
