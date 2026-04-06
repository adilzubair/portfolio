import React from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiClock, FiArrowRight } from "react-icons/fi";

const BlogCard = ({ title, description, date, readTime, tags, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={onClick}
      className="group cursor-pointer bg-white dark:bg-neutral-900 rounded-2xl border border-blue-100 dark:border-blue-900/30 p-5 sm:p-6 shadow-lg shadow-blue-100/20 dark:shadow-black/20 hover:shadow-xl hover:shadow-blue-200/30 dark:hover:shadow-blue-900/20 transition-all duration-300"
    >
      <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
        <span className="flex items-center gap-1">
          <FiCalendar className="w-3.5 h-3.5" />
          {date}
        </span>
        {readTime && (
          <span className="flex items-center gap-1">
            <FiClock className="w-3.5 h-3.5" />
            {readTime}
          </span>
        )}
      </div>

      <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 line-clamp-2">
        {title}
        <FiArrowRight className="inline-block w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
      </h3>

      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">
        {description}
      </p>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium border border-blue-100 dark:border-blue-800/30"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default BlogCard;
