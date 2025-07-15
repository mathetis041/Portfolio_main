import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import EducationTimeline from "@/components/EducationTimeline";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import React, { useState } from "react";
import TechMarquee from "@/components/TechMarquee";
import logo from "../../public/logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Index: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-dark min-h-screen relative"
      >
        {/* Light Effects */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-[30vh] -left-[30vh] w-[80vh] h-[80vh] rounded-full bg-radial-glow-premium opacity-60 animate-glow-pulse"></div>
          <div className="absolute top-[70vh] -right-[20vh] w-[50vh] h-[50vh] rounded-full bg-radial-glow-premium opacity-40 animate-glow-pulse" style={{ animationDelay: '2s' }}></div>

          <div className="light-ray-premium" style={{ top: '15vh', left: 0, width: '40vw', transform: 'rotate(30deg)', opacity: 0.2 }}></div>
          <div className="light-ray-premium" style={{ top: '35vh', left: 0, width: '60vw', transform: 'rotate(15deg)', opacity: 0.15, animationDelay: '1s' }}></div>
          <div className="light-ray-premium" style={{ top: '65vh', left: 0, width: '50vw', transform: 'rotate(-10deg)', opacity: 0.12, animationDelay: '2s' }}></div>

          <div className="absolute w-[100px] h-[100px] rounded-full bg-white/5 blur-xl animate-float" style={{ top: '20vh', left: '30vw', animationDelay: '0s' }}></div>
          <div className="absolute w-[80px] h-[80px] rounded-full bg-white/5 blur-xl animate-float" style={{ top: '60vh', right: '25vw', animationDelay: '1.5s' }}></div>
        </div>

        {/* Header */}
        <header className="fixed w-full top-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <img src={logo} className="w-12 h-12" alt="brand" />

            {/* Desktop Nav */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li>
                  <a href="#projects" className="hover:text-white transition-colors relative group">
                    Projects
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/30 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors relative group">
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/30 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button-premium text-sm px-4 py-1"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden px-4 pb-4">
              <ul className="space-y-4 mt-2 text-white">
                <li>
                  <a href="#projects" onClick={() => setIsMenuOpen(false)}>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                    Contact
                  </a>
                </li>
                {/* <li>
                  <a
                    href="https://docs.google.com/document/d/1AdgiEaEuHhGozpCc9XZ9uR_Zf9e-0UgqwEaJQxNlg_o/export?format=pdf"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setTimeout(() => {
                        setIsMenuOpen(false);
                      }, 200);
                    }}
                    className="block text-sm px-4 py-1"
                  >
                    Resume
                  </a>
                </li> */}

              </ul>
            </div>
          )}
        </header>

        {/* Main Sections */}
        <main className="pt-16 relative z-10">
          <HeroSection />
          <TechMarquee />
          <ProjectsSection />
          <EducationTimeline />
          {/* <CompetitiveStats /> */}
          {/* <BlogSection /> */}
          <ContactSection />
        </main>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-white/10 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-white/60">
              © {new Date().getFullYear()} Matthew Vincent. All rights reserved.
            </p>
          </div>
        </footer>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
