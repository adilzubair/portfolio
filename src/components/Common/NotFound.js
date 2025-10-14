import { motion } from "framer-motion";
import { FiHome } from "react-icons/fi";
import { Link } from "react-scroll";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0d0c0e] dark:text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-9xl font-bold text-blue-600 dark:text-blue-400 mb-4"
        >
          404
        </motion.h1>
        
        <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
        
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="hero"
            smooth={true}
            duration={800}
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 cursor-pointer"
          >
            <FiHome className="mr-2" />
            Go Back Home
          </Link>
        </motion.div>

        <div className="mt-12">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl"
          >
            🔍
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
