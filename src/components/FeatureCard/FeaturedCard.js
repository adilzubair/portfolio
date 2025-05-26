function FeaturedCard({ icon, title, subtitle, desc }) {
  return (
    <div className="dark:border-[#101111] border-white relative z-10 flex-1 rounded-2xl border bg-white dark:bg-[#101111] shadow-lg shadow-gray-400/50 dark:shadow-black/30 mb-4">
      <div className="border-black/20 absolute inset-x-0 inset-y-8 z-[-1] border-t dark:border-white/20" />
      <div className="border-black/20 absolute inset-y-0 inset-x-8 z-[-1] border-l dark:border-white/20" />
      <div className="-mt-0.5">
        <div className="mt-4 mr-2 ml-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-6 rounded-xl bg-neutral-200 dark:bg-slate-800 p-2">
          <div className="flex items-center gap-3 sm:gap-6">
            <div className="-m-2">{icon}</div>
            <div className="py-2 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 leading-tight">
              {title}
            </div>
          </div>
          {subtitle && (
            <div className="py-1 sm:py-2 sm:pr-4 text-xs font-medium text-blue-600 dark:text-blue-400 sm:text-right">
              {subtitle}
            </div>
          )}
        </div>
      </div>
      <div className="p-3 sm:p-4 pl-8 sm:pl-12 text-xs sm:text-sm text-left text-slate-600 dark:text-slate-400 leading-relaxed">
        {desc}
      </div>
    </div>
  );
}

export default FeaturedCard;
