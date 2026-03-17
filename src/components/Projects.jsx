import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Job Portal",
      description: "A comprehensive job search and application platform with advanced filtering, user profiles, and application tracking.",
      link: "https://job-portal-ebon-theta.vercel.app",
      detailsLink: "#",
      tech: "React • Node.js • MongoDB",
    },
    {
      title: "File Sharing App",
      description: "Secure file sharing application with drag-and-drop functionality, real-time progress tracking, and cloud storage integration.",
      link: "https://file-sharing-app-inky.vercel.app",
      detailsLink: "#",
      tech: "React • Express • Cloud Storage",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="py-24 border-t border-neutral-900/50"
      style={{ backgroundColor: "rgba(11, 11, 11, 0.3)" }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto px-6"
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl font-bold text-white mb-16 text-center"
        >
          Portfolio Showcase
        </motion.h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border-b border-neutral-900 pb-16 last:border-b-0"
            >
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h3 className="text-3xl font-semibold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-neutral-300 mb-6 leading-relaxed text-base">
                    {project.description}
                  </p>
                  <p className="text-sm text-neutral-500 mb-6">{project.tech}</p>
                  <div className="flex gap-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-neutral-300 transition-colors underline underline-offset-4 text-sm"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.detailsLink}
                      className="text-white hover:text-neutral-300 transition-colors underline underline-offset-4 text-sm"
                    >
                      Details
                    </a>
                  </div>
                </div>
                <div className="bg-neutral-900 aspect-video rounded border border-neutral-800 flex items-center justify-center">
                  <span className="text-neutral-500 text-sm">Project Screenshot</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}