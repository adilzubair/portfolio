import { motion } from "framer-motion";

export default function Label({ indicator, children }) {
  const percentage = Math.min(100, Math.max(0, indicator));

  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="relative overflow-hidden rounded-md bg-gray-100 px-3 py-1 pb-1.5 text-[13px] font-semibold dark:bg-neutral-800 cursor-pointer transition-shadow hover:shadow-md"
    >
      {children}
      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-blue-600 dark:bg-blue-400"
      />
    </motion.span>
  );
}
