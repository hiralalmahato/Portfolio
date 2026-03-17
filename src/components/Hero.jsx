import { motion } from "framer-motion";
import { Github, Linkedin, Code2 } from "lucide-react";

export default function Hero() {
  const skills = [
    "React",
    "JavaScript",
    "Spring Boot",
    "MongoDB",
  ];

  const socialIcons = [
    { 
      icon: Github, 
      url: "https://github.com/hiralalmahato", 
      label: "GitHub",
      color: "text-gray-300 hover:text-white hover:border-gray-300"
    },
    { 
      icon: Linkedin, 
      url: "https://www.linkedin.com/in/hiralal-mahato/", 
      label: "LinkedIn",
      color: "text-blue-400 hover:text-blue-300 hover:border-blue-400"
    },
    { 
      icon: Code2, 
      url: "https://leetcode.com/u/hiralalmahato/", 
      label: "LeetCode",
      color: "text-orange-400 hover:text-orange-300 hover:border-orange-400"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-20"
      style={{ backgroundColor: "rgba(11, 11, 11, 0.4)" }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-6 w-full"
      >
        {/* Main Content Container */}
        <div className="max-w-3xl">
          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 uppercase tracking-wider mb-4"
          >
            Welcome to my portfolio
          </motion.p>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="text-white">Full Stack</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                Developer
              </span>
            </h1>
          </motion.div>

          {/* Tech Enthusiast */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-neutral-300 mb-2 font-medium"
          >
            Tech Enthusiast
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base text-neutral-400 mb-8 leading-relaxed max-w-2xl"
          >
            Building scalable web applications with modern technologies. Passionate about clean code, great design, and creating seamless user experiences.
          </motion.p>

          {/* Skills Pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 mb-12"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.05, duration: 0.4 }}
                className="px-4 py-2 rounded-full border border-neutral-700 text-neutral-300 text-sm hover:border-purple-400 hover:text-purple-400 transition-all"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-12"
          >
            {/* Projects Button */}
            <a
              href="#portfolio"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              View Projects
            </a>

            {/* Contact Button */}
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border border-neutral-600 text-white font-medium hover:border-purple-400 hover:text-purple-400 transition-all"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex gap-6 items-center"
          >
            {socialIcons.map((social, index) => {
              const SocialIcon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.15, y: -4 }}
                  className={`p-3 rounded-xl border-2 border-neutral-700 ${social.color} transition-all duration-300`}
                  title={social.label}
                >
                  <SocialIcon size={24} strokeWidth={1.5} />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}