import { QuoteIcon } from "./Icons";

function Quote() {
  return (
    <div className="flex duration-300 px-4 sm:px-6 lg:px-0">
      <blockquote className="flex gap-3 pt-2 text-xl sm:text-2xl md:text-3xl lg:pt-5 lg:text-5xl text-slate-800 dark:text-slate-400 w-full">
        <QuoteIcon className="flex-shrink-0 -mt-0.5 h-8 sm:h-10 md:h-16 lg:h-24 text-blue-600 dark:text-blue-400" />
        <span className="flex flex-col min-w-0 flex-1">
          <span className="leading-[1.15] text-left">
            <em>Simple</em>{" "}
          </span>
          <span className="flex items-center gap-2 leading-[1.15] lg:gap-4 flex-wrap sm:flex-nowrap">
            <span className="mt-1 h-0.5 w-6 sm:w-8 rounded-full bg-slate-800 lg:h-1 lg:w-24 dark:bg-slate-400 flex-shrink-0" />
            <span className="text-center sm:text-left">
              <strong className="font-extrabold text-blue-600 dark:text-blue-400">
                solutions
              </strong>{" "}
              for{" "}
              <strong className="font-extrabold text-blue-600 dark:text-blue-400">
                complex{" "}
              </strong>
            </span>
            <span className="mt-1 h-0.5 w-4 sm:w-6 rounded-full bg-slate-800 lg:h-1 lg:w-14 dark:bg-slate-400 flex-shrink-0" />
          </span>
          <span className="leading-[1.15]">
            <strong className="relative font-extrabold text-blue-600 dark:text-blue-400">
              <span className="absolute -left-0.5 right-0 top-0.5 bottom-0 z-[-1] rounded-md bg-blue-100 px-1 lg:-left-1.5 lg:-right-0.5 lg:top-2 lg:bottom-0 dark:bg-blue-900/20" />
              problems.
            </strong>
          </span>
        </span>
      </blockquote>
    </div>
  );
}

export default Quote;
