import GlowCard from "./GlowCard";
import Modal from "./Modal";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  extraInfo?: string;
  techStack: string[];
  github: string;
  live: string;
}

const ProjectsSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const handleOpenModal = (title: string, content: string) => {
    setModalTitle(title);
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "Amani (in progress)",
      description: "A platform that connects tenants directly with landlords via map-integrated listings and live chat.",
      extraInfo: `Amani (In Progress)
  03/2025 - Present
  - A platform that connects tenants directly with landlords via map-integrated listings and live chat. 
  - Built with React, TypeScript, Tailwind CSS, and Jest. 
  - <b>Over 1,000 landlords joined the waitlist</b> with high engagement and onboarding interest.`,
      techStack: ["React", "TypeScript", "Tailwind", "Jest"],
      github: "https://github.com/your-username/amani",
      live: "https://amani-live-url.com"
    },
    {
      id: 2,
      title: "Reevgig",
      description: "A job and education platform connecting freelancers to clients and professional learning content.",
      techStack: ["React", "TypeScript", "CSS Modules"],
      github: "https://github.com/mathetis041/reevgig",
      live: "https://reevgig.netlify.app"
    },
    {
      id: 3,
      title: "Basefit (in progress)",
      description: "A Web3 fitness app that rewards users in USDT for completing daily workouts like distance walking.",
      extraInfo: `BaseFit (In Progress)
  01/2025 - Present
  - A Web3 fitness app that <b>rewards users in USDT</b> for completing daily workouts like distance walking. 
  - Currently implementing workout tracking, crypto wallet integration, and reward distribution logic. 
  - Aims to promote daily fitness habits while gamifying healthy behavior through tokenized rewards.`,
      techStack: ["Nextjs", "Tailwind", "Web3", "Firebase"],
      github: "https://github.com/your-username/basefit",
      live: "https://basefit-live-url.com"
    },
    {
      id: 4,
      title: "Radio App",
      description: "A global radio streaming app with search filtering by country/place and single-player.",
      techStack: ["React", "CSS Modules", "API Integration"],
      github: "https://github.com/mathetis041/radio-app",
      live: "https://mattvinc-radio-app.netlify.app"
    },
    {
      id: 5,
      title: "Chef Palace",
      description: "A functional recipe and culinary app that gives dietary nutritional details, filters, and recipe interactions.",
      techStack: ["React", "Tailwind", "Framer Motion", "API Integration"],
      github: "https://github.com/mathetis041/Chef-Palace",
      live: "https://incomparable-kashata-b55812.netlify.app"
    },
    {
      id: 6,
      title: "AI Chat App",
      description: "A chat interface powered by Gemini API for interactive Q&A, showcasing asynchronous data handling.",
      techStack: ["React", "TypeScript", "Framer Motion", "Gemini API"],
      github: "https://github.com/mathetis041/AI-Chat",
      live: "https://mattvinc-chatbot.netlify.app"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <div className="corner-light-premium top-0 right-0 opacity-50"></div>
      <div className="light-ray-premium opacity-20" style={{ top: '30%', right: '-20%', width: '70%', transform: 'rotate(165deg)' }}></div>
      <div className="light-ray-premium opacity-15" style={{ top: '60%', right: '-10%', width: '50%', transform: 'rotate(150deg)' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="section-heading-premium relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <GlowCard
                intensity={index % 3 === 0 ? 'high' : index % 2 === 0 ? 'medium' : 'low'}
                className="group h-full"
                hoverScale={1}
              >
                <div className="p-6 h-full flex flex-col relative z-10">
                  {/* Ensure this has pointer-events-none to not block links */}
                  <div className="absolute inset-0 border border-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>

                  <h3 className="text-2xl font-bold italic mb-3 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-white/70 mb-2 group-hover:text-white/90 transition-colors">
                    {project.description}
                  </p>

                  {project.extraInfo && (
                    <span
                      onClick={() => handleOpenModal(project.title, project.extraInfo!)}
                      className="text-xs font-extrabold text-orange-600 underline hover:text-white/90 transition-colors italic mb-4 self-start cursor-pointer"
                    >
                      View More
                    </span>
                    // text-white/60
                  )}

                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-dark-200/50 backdrop-blur-sm border border-white/5 rounded-full text-white/60 group-hover:text-white/90 group-hover:border-white/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between gap-4 mt-auto z-10 relative">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors cursor-pointer"
                    >
                      <span>Live Demo</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors cursor-pointer"
                    >
                      <span>GitHub Repo</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Render */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={modalTitle}
        content={modalContent}
      />
    </section>
  );
};

export default ProjectsSection;
