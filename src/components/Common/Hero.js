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
      className="relative min-h-screen flex flex-col justify-center items-center p-4 sm:p-5 text-center pt-28 sm:pt-32 z-30 overflow-y-hidden overflow-x-hidden"
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
        className="text-sm sm:text-base pt-3 md:text-xl text-blue-600 dark:text-blue-400 font-bold z-0"
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

      <div className="mt-16 sm:mt-20 mb-0 down-arrow z-0">
        <FaArrowDown className="text-blue-600 dark:text-blue-400 text-2xl sm:text-3xl animate-bounce " />
      </div>
    </section>
  );
};

export default Hero;
