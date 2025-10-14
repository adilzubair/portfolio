import { useState } from "react";
import { motion } from "framer-motion";

const LazyImage = ({ 
  src, 
  alt, 
  className = "", 
  placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23e5e7eb' width='400' height='300'/%3E%3C/svg%3E",
  ...props 
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`bg-gray-200 dark:bg-gray-800 flex items-center justify-center ${className}`}>
        <span className="text-gray-400 dark:text-gray-600">Image not available</span>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      {!loaded && (
        <div className={`absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse ${className}`} />
      )}
      <motion.img
        src={src || placeholder}
        alt={alt}
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        loading="lazy"
        {...props}
      />
    </div>
  );
};

export default LazyImage;
