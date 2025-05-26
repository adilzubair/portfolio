import React from "react";
import HashLoader from "react-spinners/HashLoader";
import { motion } from "framer-motion";

const PreLoader = (props) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-[#050505] dark:to-[#0a0a0f] relative overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400 rounded-full opacity-5 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      {/* Simple Hash Loader */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <HashLoader
            color={"#2563eb"}
            loading={props.loading}
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PreLoader;
