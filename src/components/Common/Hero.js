import { FaArrowDown } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import ActiveComponent from "./ActiveComponent";
import BackgroundCircles from "./BackgroundCircles";
import SliderText from "../Slider/SliderText";
import { useState } from "react";

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

const Hero = () => {
  window.addEventListener("scroll", function () {
    const downArrow = this.document.querySelector(".down-arrow");

    if (this.scrollY >= 1200) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");
  });

  const [sliderTextLoader, setSliderTextLoader] = useState(false);

  setInterval(() => {
    setSliderTextLoader(true);
  }, 3500);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center p-4 sm:p-5 text-center pt-28 sm:pt-32 z-30 overflow-y-hidden overflow-x-hidden seamless-transition"
    >
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/20 to-purple-50/20 dark:via-blue-900/10 dark:to-purple-900/10"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-xl float"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500 rounded-full opacity-10 blur-xl float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-20 h-20 bg-blue-400 rounded-full opacity-10 blur-xl float" style={{animationDelay: '2s'}}></div>

      {!sliderTextLoader && <BackgroundCircles />}
      {sliderTextLoader && (
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <SliderText />
        </motion.div>
      )}

      {/* Main Content without Box */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.5 }}
          className="text-sm sm:text-base pt-3 md:text-xl gradient-text font-bold z-0"
        >
          Software Engineer
        </motion.h2>

        <motion.div
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.5 }}
          className="py-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold leading-[1.1] z-0"
        >
          <span className="text-slate-700 dark:text-slate-200">
            <TypeAnimation
              sequence={["Welcome👋", 2000, "Muhamed Adil"]}
              speed={30}
              wrapper="span"
              repeat={Infinity}
            />
          </span>
        </motion.div>

        <motion.div className="z-10">
          <ActiveComponent />
        </motion.div>
      </div>

      <motion.div 
        className="mt-16 sm:mt-20 mb-0 down-arrow z-0 glow-hover cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="relative">
          <FaArrowDown className="text-blue-600 dark:text-blue-400 text-2xl sm:text-3xl animate-bounce" />
          <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 blur-md pulse-slow"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
