import React from "react";
import { motion } from "framer-motion";
import { fadeTop, motionStep } from "./Motion";
import Section from "../Common/Section";
import BlogCard from "./BlogCard";
import { posts } from "./BlogData";

const Blog = () => {
  return (
    <Section
      id="blog"
      title="Blog"
      subtitle="Thoughts, tutorials, and deep dives into AI, software engineering, and everything in between."
      className="relative"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-5 md:px-10 lg:px-20 2xl:px-40 w-full max-w-7xl">
        {posts.length > 0 ? (
          posts.map((post, i) => (
            <motion.div key={i} variants={fadeTop} {...motionStep}>
              <BlogCard
                title={post.title}
                description={post.description}
                date={post.date}
                readTime={post.readTime}
                tags={post.tags}
                onClick={() => {
                  window.location.hash = `/blog/${post.slug}`;
                }}
              />
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No blog posts yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Blog;
