import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Express",
    "Tailwind CSS",
    "RESTful APIs",
    "Git",
    "Docker",
    "AWS",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
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
          Tech Stack
        </motion.h2>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          variants={containerVariants}
        >
          {skills.map((skill) => (
            <motion.span
              key={skill}
              variants={itemVariants}
              className="text-neutral-300 text-sm px-4 py-2 border border-neutral-700 hover:border-neutral-500 hover:text-white transition-all"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}