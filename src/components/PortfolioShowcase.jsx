import { motion } from "framer-motion";
import { useState } from "react";
import {
  Code2,
  Award,
  Layers,
  ExternalLink,
  ChevronRight,
  FileCode,
  Paintbrush,
  Wind,
  Leaf,
  Server,
  Atom,
  FileType,
  Braces,
  Container,
  KeyRound,
} from "lucide-react";

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState("projects");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const projects = [
    {
      id: 1,
      title: "Job Portal",
      description: "A full-stack job portal where employers can post jobs and candidates can apply seamlessly.",
      liveUrl: "https://job-portal-ebon-theta.vercel.app",
      imageUrl: "/job.png",
    },
    {
      id: 2,
      title: "File Sharing App",
      description: "A secure file sharing application with easy upload, download and sharing capabilities.",
      liveUrl: "https://file-sharing-app-inky.vercel.app",
      imageUrl: "/file.png",
    },
  ];

  const certificates = [
    { id: 1, src: "/coursera.png", alt: "Coursera Certificate" },
    { id: 2, src: "/coursera1.png", alt: "Coursera Certificate" },
    { id: 3, src: "/nptel.png", alt: "NPTEL Certificate" },
  ];

  const techStack = [
    { name: "HTML", icon: FileCode },
    { name: "CSS", icon: Paintbrush },
    { name: "Tailwind CSS", icon: Wind },
    { name: "Spring Boot", icon: Leaf },
    { name: "Node.js", icon: Server },
    { name: "React.js", icon: Atom },
    { name: "TypeScript", icon: FileType },
    { name: "JavaScript", icon: Braces },
    { name: "Docker", icon: Container },
    { name: "JWT", icon: KeyRound },
  ];

  const tabs = [
    { id: "projects", label: "Projects", icon: Code2 },
    { id: "certificates", label: "Certificates", icon: Award },
    { id: "techstack", label: "Tech Stack", icon: Layers },
  ];

  return (
    <section
      id="portfolio"
      className="py-24 border-t border-neutral-900/50"
      style={{ backgroundColor: "rgba(11, 11, 11, 0.3)" }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto px-6 relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
            Portfolio Showcase
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-2 mb-12 p-2 border border-white/10 rounded-2xl bg-white/5 w-fit mx-auto"
        >
          {tabs.map((tab) => {
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-2 rounded-xl font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-purple-900/40 text-white"
                    : "bg-transparent text-neutral-400 hover:text-white"
                }`}
              >
                <TabIcon size={18} />
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Projects Tab */}
          {activeTab === "projects" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-white/20 transition-all"
                >
                  {/* Image */}
                  <div className="w-full h-48 bg-neutral-800 overflow-hidden rounded-t-2xl">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-neutral-400 text-sm mb-6">{project.description}</p>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={16} />
                      </a>
                      <button className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm font-medium">
                        <span>Details</span>
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Certificates Tab */}
          {activeTab === "certificates" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={cert.src}
                    alt={cert.alt}
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              ))}
            </div>
          )}

          {/* Tech Stack Tab */}
          {activeTab === "techstack" && (
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => {
                const TechIcon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-purple-900/30 hover:border-purple-500/50 transition-all group"
                  >
                    <TechIcon size={18} className="text-purple-400 group-hover:text-purple-300" />
                    <span className="text-sm font-medium text-neutral-300 group-hover:text-white">{tech.name}</span>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
