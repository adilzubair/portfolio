function AvailableForHire() {
  return (
    <div className="flex items-center justify-center button button--ghost text-[#7000ff] pointer-events-none gap-2.5 px-3 md:button--big md:px-2.5 dark:text-[#7000ff] text-base sm:text-lg md:text-xl font-bold">
      <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
        <span className="bg-[#7000ff] absolute -top-1 -left-1 inline-flex h-4 w-4 sm:h-5 sm:w-5 animate-ping rounded-full opacity-75 dark:bg-[#7000ff]" />
        <span className="bg-[#7000ff] relative inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full dark:bg-[#7000ff]" />
      </span>
      Available For Hire
    </div>
  );
}

export default AvailableForHire;
