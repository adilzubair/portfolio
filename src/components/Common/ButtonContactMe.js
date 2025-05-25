import { Link } from "react-scroll";


function ButtonContactMe() {
  return (
    <div className="mt-5 flex gap-4">
      <Link
        to="contact"
        className="bg-gradient-to-r border-2 hover:border-transparent border-blue-600 bg-transparent transition-colors hover:from-blue-700 hover:to-blue-600 py-2 rounded-xl z-0 font-semibold tracking-[1px] hover:text-white shadow-lg shadow-gray-400/30 dark:shadow-black/30 px-4"
      >
        Get in Touch
      </Link>
      <a
        href="/MuhamedAdil_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl shadow-lg shadow-gray-400/30 dark:shadow-black/30 border-2 border-blue-600 hover:border-transparent transition-colors"
      >
        Download Resume
      </a>
    </div>
  );
}

export default ButtonContactMe;
