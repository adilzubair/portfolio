import React, { useState } from "react";
import Section from "../Common/Section";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "John Smith",
    role: "Senior Engineer, Cooee",
    image: "👨‍💻",
    content:
      "Muhamed is an exceptional developer with strong problem-solving skills. His work on optimizing our email automation pipeline reduced delivery time by 90%. His expertise in Python and Go made him invaluable to our team.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Tech Lead, Intel Corporation",
    image: "👩‍💻",
    content:
      "During his internship, Muhamed demonstrated excellent understanding of AI/ML optimization. He successfully deployed LLM chatbots on Intel CPUs using OpenVINO. His technical documentation was thorough and professional.",
    rating: 5,
  },
  {
    name: "Ahmed Al-Rashid",
    role: "CTO, Greentruth Technology",
    image: "👨‍💼",
    content:
      "Muhamed's work on our Bitcoin wallet application and Lightning Network bot exceeded expectations. His ability to work with distributed systems and blockchain technology is impressive. Highly recommended!",
    rating: 5,
  },
  {
    name: "Dr. Lisa Wang",
    role: "Research Supervisor, CCU Taiwan",
    image: "👩‍🔬",
    content:
      "Muhamed showed great aptitude for research during his internship. His work on hyperspectral imaging data processing was methodical and well-documented. A pleasure to work with.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Section
      id="testimonials"
      title="Testimonials"
      subtitle="What colleagues and mentors say about me"
      className="relative overflow-hidden"
    >
      <div className="px-4 sm:px-5 md:px-20 max-w-4xl mx-auto">
        <div className="relative min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-2xl p-8 md:p-12 shadow-xl relative">
                <FaQuoteLeft className="text-5xl text-blue-600/20 dark:text-blue-400/20 absolute top-6 left-6" />
                
                <div className="relative z-10">
                  {/* Avatar */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="text-6xl mb-4">
                      {testimonials[currentIndex].image}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 dark:text-gray-300 text-center text-lg leading-relaxed italic mb-6">
                    "{testimonials[currentIndex].content}"
                  </p>

                  {/* Rating */}
                  <div className="flex justify-center gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-xl">
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-[#101111] p-3 rounded-full shadow-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            aria-label="Previous testimonial"
          >
            <HiChevronLeft className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-[#101111] p-3 rounded-full shadow-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            aria-label="Next testimonial"
          >
            <HiChevronRight className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-600 dark:bg-blue-400 w-8"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-blue-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
