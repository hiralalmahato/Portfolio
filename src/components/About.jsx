import { motion } from "framer-motion";
import { FileText, Code2, ArrowUpRight } from "lucide-react";

export default function About() {
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

  const stats = [
    {
      icon: Code2,
      number: "2",
      label: "TOTAL PROJECTS",
      description: "Web solutions crafted",
    },
    {
      icon: FileText,
      number: "10+",
      label: "SKILLS",
      description: "Technologies mastered",
    },
    {
      icon: ArrowUpRight,
      number: "100%",
      label: "DEDICATION",
      description: "Passion for development",
    },
  ];

  return (
    <section
      id="about"
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
        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-5xl sm:text-6xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
        >
          About Me
        </motion.h2>

        {/* Bio Text */}
        <motion.div
          variants={itemVariants}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-lg text-neutral-300 leading-relaxed">
            Hello, I'm{" "}
            <span className="text-white font-bold">Hiralal Mahato</span>,
            passionate about building smart and scalable web applications. I've
            completed full-stack development training and constantly explore new
            technologies to refine my skills. Focused on continuous learning, I
            aim to build innovative solutions and eventually move towards AI and
            advanced technologies.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {/* Download CV Button */}
          <a
            href="/hiralalmahatocv2.pdf"
            download="hiralalmahatocv2.pdf"
            className="flex items-center gap-2 px-8 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-all hover:shadow-lg hover:shadow-purple-500/30"
          >
            <FileText size={20} />
            Download CV
          </a>

          {/* View Projects Button */}
          <a
            href="#portfolio"
            className="flex items-center gap-2 px-8 py-3 border border-neutral-600 text-white rounded-lg font-medium hover:border-purple-400 hover:text-purple-400 transition-all"
          >
            <Code2 size={20} />
            View Projects
          </a>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                }}
                whileHover={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                }}
              >
                <div className="flex items-start justify-between mb-6">
                  {/* Icon Container */}
                  <div className="p-3 rounded-full bg-neutral-800/50 flex items-center justify-center">
                    <Icon size={24} className="text-purple-400" />
                  </div>

                  {/* Number */}
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    {stat.number}
                  </div>
                </div>

                {/* Label and Description */}
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-1">
                      {stat.label}
                    </h3>
                    <p className="text-xs text-neutral-400">{stat.description}</p>
                  </div>

                  {/* Arrow Icon */}
                  <ArrowUpRight size={18} className="text-neutral-500" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}