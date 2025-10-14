import { motion } from "framer-motion";

function FeaturedCard({ icon, title, subtitle, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="dark:border-blue-900/20 border-blue-100 relative z-10 flex-1 rounded-2xl border-2 bg-gradient-to-br from-white to-blue-50/30 dark:from-[#0a0a0a] dark:to-blue-950/10 shadow-xl hover:shadow-2xl shadow-gray-300/50 dark:shadow-black/50 mb-6 transition-all duration-300"
    >
      <div className="border-blue-200/30 absolute inset-x-0 inset-y-8 z-[-1] border-t dark:border-blue-800/20" />
      <div className="border-blue-200/30 absolute inset-y-0 inset-x-8 z-[-1] border-l dark:border-blue-800/20" />
      <div className="-mt-0.5">
        <div className="mt-5 mx-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-6 rounded-xl bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-slate-800/50 p-3 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/30">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="-m-2 transform hover:scale-110 transition-transform duration-200">{icon}</div>
            <div className="py-2 text-sm sm:text-base font-bold text-slate-800 dark:text-slate-100 leading-tight">
              {title}
            </div>
          </div>
          {subtitle && (
            <div className="py-1 sm:py-2 sm:pr-4 text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-300 sm:text-right bg-blue-50/50 dark:bg-blue-950/30 px-3 rounded-lg">
              {subtitle}
            </div>
          )}
        </div>
      </div>
      <div className="p-4 sm:p-5 pl-8 sm:pl-12 text-xs sm:text-sm text-left text-slate-700 dark:text-slate-300 leading-relaxed">
        {desc}
      </div>
    </motion.div>
  );
}

export default FeaturedCard;
