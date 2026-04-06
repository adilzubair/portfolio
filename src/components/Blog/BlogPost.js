import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiCalendar, FiClock } from "react-icons/fi";
import { fullPosts, posts } from "./BlogData";

const BlogPost = ({ postSlug }) => {
  const post = fullPosts[postSlug];
  const meta = posts.find((p) => p.slug === postSlug) || {};

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [postSlug]);

  const handleBack = () => {
    window.location.hash = "#blog";
    // Scroll to blog section after navigating
    setTimeout(() => {
      const el = document.getElementById("blog");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  if (!post) {
    return (
      <div className="min-h-screen pt-24 text-center">
        <p className="text-xl text-gray-500 dark:text-gray-400">Post not found</p>
        <button
          onClick={handleBack}
          className="mt-4 text-blue-600 hover:text-blue-700 dark:text-blue-400"
        >
          ← Back to all posts
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-24 pb-16 px-4 sm:px-6 md:px-10 lg:px-20 2xl:px-40 bg-white dark:bg-[#0d0c0e] text-gray-900 dark:text-white"
    >
      <div className="max-w-3xl mx-auto">
        {/* Back button */}
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8 group"
          aria-label="Go back to all posts"
        >
          <FiArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to all posts
        </button>

        {/* Header */}
        <article>
          <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span className="flex items-center gap-1">
              <FiCalendar className="w-3.5 h-3.5" />
              {meta.date}
            </span>
            {meta.readTime && (
              <span className="flex items-center gap-1">
                <FiClock className="w-3.5 h-3.5" />
                {meta.readTime}
              </span>
            )}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight"
          >
            {meta.title}
          </motion.h1>

          {meta.tags && meta.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {meta.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium border border-blue-100 dark:border-blue-800/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-10 border-l-4 border-blue-500 pl-4"
          >
            {post.intro}
          </motion.p>

          {/* Sections */}
          <div className="space-y-10">
            {post.sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                  {section.heading}
                </h2>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {section.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Conclusion */}
          {post.conclusion && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-12 p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30"
            >
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {post.conclusion}
              </p>
              {post.github && (
                <a
                  href={post.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400 text-white font-semibold rounded-xl shadow-lg shadow-blue-200/30 dark:shadow-blue-900/30 hover:shadow-xl hover:translate-y-[-2px] transition-all"
                >
                  {post.githubLabel || "View Source"}
                  <FiArrowLeft className="w-4 h-4 rotate-180" />
                </a>
              )}
            </motion.div>
          )}
        </article>
      </div>
    </motion.div>
  );
};

export default BlogPost;
