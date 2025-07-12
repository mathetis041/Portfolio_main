import React from "react";
import avatar from "../../public/Matthew3.jpg";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 relative overflow-hidden">
      {/* Glow and Light Effects */}
      <div className="corner-light-premium"></div>
      <div className="corner-light-premium" style={{ right: 0, left: 'auto', transform: 'rotate(90deg)' }}></div>

      <div className="light-ray-premium opacity-30" style={{ top: '10%', left: '-10%', width: '80%', transform: 'rotate(25deg)' }}></div>
      <div className="light-ray-premium opacity-20" style={{ top: '30%', left: '-5%', width: '60%', transform: 'rotate(15deg)' }}></div>
      <div className="light-ray-premium opacity-10" style={{ top: '60%', left: '-15%', width: '70%', transform: 'rotate(-10deg)' }}></div>

      <div className="absolute w-[1000px] h-[1000px] rounded-full bg-radial-glow-premium opacity-60 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 animate-glow-pulse"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Larger Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-96 h-96 rounded-full overflow-hidden border-4 border-white/10 mx-auto mb-8"
        >
          <img
            src={avatar}
            alt="Matthew Vincent"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.h1
          className="hero-heading relative text-5xl md:text-7xl font-extrabold italic mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block hero-text-gradient"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={textVariants}
          >
            Matthew Vincent
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl font-light italic text-white/80 mb-6 leading-relaxed max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={textVariants}
        >
          Frontend Developer
        </motion.p>

        <motion.p
          className="text-md md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed"
          initial="hidden"
          animate="visible"
          custom={3}
          variants={textVariants}
        >
          I craft dynamic user interfaces that don’t just look good — they solve real-world problems. As a mission-driven frontend developer with a passion for innovation, I specialize in building high-performance digital experiences using React, TypeScript, Tailwind, and Web3 technologies.
          <br /><br />
          My ambition is simple yet powerful: to harness the power of code to address pressing global challenges — from democratizing housing to improving healthcare access and making fitness more rewarding. I believe technology should serve people at scale, and I’m committed to creating inclusive, sustainable solutions that improve lives and leave a lasting impact.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
