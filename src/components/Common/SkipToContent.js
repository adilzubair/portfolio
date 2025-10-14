import { Link } from "react-scroll";

const SkipToContent = () => {
  return (
    <Link
      to="hero"
      smooth={true}
      duration={500}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
    >
      Skip to main content
    </Link>
  );
};

export default SkipToContent;
