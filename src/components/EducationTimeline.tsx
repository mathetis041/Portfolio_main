import React from "react";
import { motion } from "framer-motion";

interface ExperienceItem {
  id: number;
  years: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  achievements: string[];
  link?: string;
}

interface CertificateItem {
  id: number;
  title: string;
  issuer: string;
  year: string;
  link?: string;
}

const ExperienceAndCertifications: React.FC = () => {
  const experienceData: ExperienceItem[] = [
    {
      id: 1,
      years: "09/2023 – Present",
      role: "Frontend Developer Intern",
      organization: "DesignGuy Ltd",
      location: "Lagos, Nigeria",
      description:
        "DesignGuy Ltd specializes in the development of innovative digital products and branding tools for organizations.",
      achievements: [
        "Developed and optimized 10+ responsive, mobile-first web interfaces using React.",
        "Reduced page load time by 25% on key landing pages through performance optimization techniques.",
        "Contributed to 10+ agile sprints and participated in weekly peer code reviews for continuous improvement.",
        "Collaborated on 5+ API-intensive modules, implementing clean data fetching strategies with Axios and React Query.",
        "Improved SEO performance scores by 35% through semantic HTML, structured data integration, and accessibility-first design.",
      ],
      link: "https://designguyltd.github.io/designguy-ltd/",
    },
    {
      id: 2,
      years: "06/2022 – 08/2022",
      role: "Frontend Developer",
      organization: "I4GxZURI Cohort 1 Scholarship",
      location: "Akure, Nigeria",
      description:
        "The program emphasizes real-world development skills, teamwork, and project launches for entry-level developers.",
      achievements: [
        "Built and deployed a live fullstack app with a cross-functional team of 5+ developers and designers.",
        "Demoed a working application to a live panel at the end of the 3-month program.",
        "Implemented 3+ frontend components using HTML, CSS, and JavaScript for seamless user experiences.",
        "Collaborated with 14+ team members, including designers, backend developers, and PMs in a simulated remote workspace.",
        "Practiced Git-based version control and completed 8+ deliverables under strict deadlines.",
      ],
      link: "https://drive.google.com/file/d/1OKbUBrlFHllL0t1XGfjmONQIuLJgUMSe/view?usp=sharing",
    },
  ];

  const certificateData: CertificateItem[] = [
    {
      id: 1,
      title: "Introduction to HTML, CSS, and JavaScript",
      issuer: "IBM",
      year: "2024",
      link: "https://drive.google.com/file/d/1r3R0AX-1LkjddoVpUZKakDsHf-VpHm5n/view?usp=sharing",
    },
    {
      id: 2,
      title: "Programming with Javascript",
      issuer: "Meta",
      year: "2023",
      link: "https://drive.google.com/file/d/1YC_b0C2wfHBSddddLPTSLKJzbeZlRWuO/view?usp=sharing",
    },
    {
      id: 3,
      title: "Fullstack Web Development",
      issuer: "I4GxZURI Cohort 1 Scholarship",
      year: "2022",
      link: "https://drive.google.com/file/d/1OKbUBrlFHllL0t1XGfjmONQIuLJgUMSe/view?usp=sharing",
    },
    {
      id: 4,
      title: "Web Development Bootcamp",
      issuer: "Udacity",
      year: "2022",
      link: "https://drive.google.com/file/d/1H-DisDXD8XRZC1MLGDBBeVi43YxaXT7_/view?usp=sharing",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>

        <div className="relative pl-10">
          <div className="timeline-line"></div>
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="mb-12 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div
                className="absolute -left-10 w-4 h-4 rounded-full bg-white/20 border border-white/40"
                style={{ boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)" }}
              ></div>
              <div className="glow-card p-6">
                <span className="text-white/60 block mb-1">{exp.years}</span>
                <h3 className="text-xl font-bold mb-1">
                  {exp.role} –{" "}
                  <span className="text-white/70">{exp.organization}</span>
                </h3>
                <p className="text-white/80 mb-2 italic">{exp.location}</p>
                <p className="text-white/70 mb-3">{exp.description}</p>
                <ul className="list-disc list-inside text-white/60 space-y-1">
                  {exp.achievements.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
                {exp.link && (
                  <a
                    href={exp.link}
                    className="text-xs underline text-white/50 hover:text-white/80 mt-2 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Company/Project
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.h2
          className="section-heading mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certifications & Online Learning
        </motion.h2>

        <motion.p
          className="text-white/70 text-base italic mt-4 mb-10 max-w-3xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I’ve completed rigorous online learning programs and earned recognized
          certifications from global tech leaders such as IBM, Meta, Udacity,
          and I4GxZURI. These programs have deepened my understanding of frontend
          and fullstack web development, React programming, and best practices in
          software engineering. I’ve also self-taught extensively using curated YouTube
          resources from leading educators like Fireship, Web Dev Simplified, and The Net Ninja —
          further reinforcing my hands-on skills and industry-ready mindset.
        </motion.p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {certificateData.map((cert) => (
            <motion.div
              key={cert.id}
              className="glow-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-lg font-semibold text-white mb-1">
                {cert.title}
              </h4>
              <p className="text-white/70 mb-1 italic">
                {cert.issuer} – {cert.year}
              </p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline text-white/50 hover:text-white/80"
                >
                  View Certificate
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceAndCertifications;
