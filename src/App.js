import { useEffect, useState } from "react";
import AppFooter from "./components/Footer/Footer";
import SkillsPage from "./components/Skills/SkillsPage";
import { motion } from "framer-motion";
import PreLoader from "./components/Loader/Loader";
import HeaderNav from "./components/Header/HeaderNav";
import FloatingNav from "./components/Common/FloatingNav";

import Projects from "./components/Projects/Projects";
import { Toaster } from "react-hot-toast";
import About from "./components/About/About";
import Contact from "./components/Contact/ContactsPage";
import Hero from "./components/Common/Hero";


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${darkMode && "dark"}`}>
      {loading ? (
        <PreLoader loading={loading} />
      ) : (
        <main className="relative text-gray-900 dark:text-white transition-colors duration-700">
          {/* Unified background container */}
          <div className="fixed inset-0 -z-10">
            {/* Seamless background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/20 via-blue-100/30 to-blue-200/40 dark:from-[#0d0c0e] dark:via-[#1a1820] dark:via-[#262432] dark:to-[#323044]"></div>
            
            {/* Additional gradient overlay for smoothness */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/10 to-purple-50/10 dark:via-purple-900/5 dark:to-blue-900/5"></div>
            
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent dark:via-black/5"></div>
          </div>
          
          <Toaster position="top-center" reverseOrder={false} />
          <HeaderNav darkMode={darkMode} setDarkMode={setDarkMode} />
          <FloatingNav />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.2, 0.4, 0.8, 1] }}
            transition={{ duration: 0.2 }}
            className="relative z-10"
          >
            <section className="section-transition">
              <Hero />
            </section>
            
            <div className="section-separator opacity-50"></div>
            
            <section className="section-transition">
              <About />
            </section>
            
            {/* Seamless transition space */}
            <div className="h-16 md:h-24"></div>
            
            <section className="section-transition">
              <SkillsPage />
            </section>
            
            <div className="section-separator opacity-50"></div>
            
            <section className="section-transition">
              <Projects />
            </section>
            
            <div className="section-separator opacity-50"></div>
            
            <section className="section-transition">
              <Contact />
            </section>
            
            <section>
              <AppFooter />
            </section>
          </motion.div>
        </main>
      )}
    </div>
  );
}

export default App;
