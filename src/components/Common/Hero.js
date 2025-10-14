import { FaArrowDown } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import ActiveComponent from "./ActiveComponent";
import BackgroundCircles from "./BackgroundCircles";
import SliderText from "../Slider/SliderText";
import { useState, useEffect } from "react";

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

const Hero = () => {
  const [sliderTextLoader, setSliderTextLoader] = useState(false);

  useEffect(() => {
    // Handle scroll event for arrow visibility
    const handleScroll = () => {
      const downArrow = document.querySelector(".down-arrow");
      if (downArrow) {
        if (window.scrollY >= 1200) {
          downArrow.classList.add("hide-down-arrow");
        } else {
          downArrow.classList.remove("hide-down-arrow");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Set slider text loader after delay
    const timer = setTimeout(() => {
      setSliderTextLoader(true);
    }, 3500);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center p-4 sm:p-5 text-center pt-28 sm:pt-32 z-30 overflow-y-hidden overflow-x-hidden bg-gradient-to-b from-blue-50/50 via-transparent to-transparent dark:from-blue-950/20 dark:via-transparent dark:to-transparent"
    >
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

      <motion.h2
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.5 }}
        className="text-sm sm:text-base pt-3 md:text-xl text-blue-600 dark:text-blue-400 font-bold z-0 uppercase tracking-widest"
      >
        Software Engineer
      </motion.h2>

      <motion.div
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.5 }}
        className="py-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-extrabold leading-[1.1] z-0"
      >
        <span className="bg-gradient-to-r from-slate-700 via-blue-600 to-slate-700 dark:from-slate-200 dark:via-blue-400 dark:to-slate-200 bg-clip-text text-transparent">
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

      <div className="mt-16 sm:mt-20 mb-0 down-arrow z-0">
        <FaArrowDown className="text-blue-600 dark:text-blue-400 text-2xl sm:text-3xl animate-bounce " />
      </div>
    </section>
  );
};

export default Hero;
