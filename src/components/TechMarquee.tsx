import React from "react";

import {
  Github,
  Code2,
  Cloud,
  Globe,
  Terminal,
  Paintbrush,
  Layers,
  ServerCrash,
  Bot,
  Sparkles,
} from 'lucide-react';

const TechMarquee: React.FC = () => {
  const techStackRow1 = [
    { name: "React", icon: <Code2 className="w-5 h-5 mr-2" /> },
    { name: "Next.js", icon: <Code2 className="w-5 h-5 mr-2" /> },
    { name: "TypeScript", icon: <Code2 className="w-5 h-5 mr-2" /> },
    { name: "TailwindCSS", icon: <Paintbrush className="w-5 h-5 mr-2" /> },
    { name: "CSS Modules", icon: <Layers className="w-5 h-5 mr-2" /> },
    { name: "React-Storybook", icon: <Code2 className="w-5 h-5 mr-2" /> },

  ];

  const techStackRow2 = [
    { name: "Jest", icon: <Terminal className="w-5 h-5 mr-2" /> },
    { name: "Firebase", icon: <Cloud className="w-5 h-5 mr-2" /> },
    // { name: "Web3", icon: <Globe className="w-5 h-5 mr-2" /> },
    { name: "Gemini API", icon: <Bot className="w-5 h-5 mr-2" /> },
    { name: "Framer Motion", icon: <Sparkles className="w-5 h-5 mr-2" /> },
    { name: "API Integration", icon: <ServerCrash className="w-5 h-5 mr-2" /> },
    { name: "GitHub Actions", icon: <Github className="w-5 h-5 mr-2" /> },
  ];

  const renderMarqueeItems = (
    items: Array<{ name: string; icon: React.ReactNode }>
  ) =>
    items.map((tech, index) => (
      <span
        key={index}
        className="tech-badge-premium mx-2 sm:mx-5 flex items-center text-white/80 px-3 py-1 text-sm sm:text-base min-w-fit flex-shrink-0"
      >
        {tech.icon}
        {tech.name}
      </span>
    ));

  return (
    <section className="py-20 bg-dark-100/30 relative max-w-screen-xl mx-auto px-4 sm:px-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-radial-glow-premium opacity-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>

      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white z-10 relative mb-10">
        Technologies I Use
      </h2>

      {/* Row 1 - scrolls right */}
      <div className="relative overflow-hidden">
        <div className="animate-scroll-right flex whitespace-nowrap py-5">
          {renderMarqueeItems(techStackRow1)}
        </div>
      </div>

      {/* Row 2 - scrolls left */}
      <div className="relative overflow-hidden mt-10">
        <div className="animate-scroll-left flex whitespace-nowrap py-5">
          {renderMarqueeItems(techStackRow2)}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
