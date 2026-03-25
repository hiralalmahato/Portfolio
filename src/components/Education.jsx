import { motion } from "framer-motion";
import { BookOpen, MapPin, Calendar, Badge } from "lucide-react";

export default function Education() {
  const education = [
    {
      institution: "Lovely Professional University",
      location: "Punjab, India",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      grade: "7.85 CGPA",
      duration: "August 2023 – Present (2027)",
      isCurrent: true,
    },
    {
      institution: "Karim City College",
      location: "Jharkhand, India",
      degree: "Intermediate",
      grade: "72%",
      duration: "2020-2021",
      isCurrent: false,
    },
    {
      institution: "T.P.S DAV Public School",
      location: "Jharkhand, India",
      degree: "Matriculation",
      grade: "84%",
      duration: "2018-2019",
      isCurrent: false,
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="education"
      className="py-24 border-t border-neutral-900/50 relative"
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
              "radial-gradient(circle, rgba(34, 197, 94, 0.08) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto px-6 relative z-10"
      >
        {/* Heading */}
        <motion.div variants={itemVariants} className="text-center mb-4">
          <h2 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3">
            Education
          </h2>
          <p className="text-lg text-neutral-400 font-medium">
            My academic journey
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="mt-16 max-w-4xl mx-auto flex flex-col items-center">
          {education.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex gap-6 mb-8 relative w-full justify-center"
            >
              {/* Timeline Dot and Line */}
              <div className="flex flex-col items-center">
                {/* Dot */}
                <div className="relative mb-8">
                  {item.isCurrent ? (
                    <>
                      {/* Pulsing glow effect for current */}
                      <motion.div
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.6, 0.1, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 bg-green-400 rounded-full"
                        style={{ width: "20px", height: "20px" }}
                      />
                      <div className="w-5 h-5 bg-green-400 rounded-full relative z-10 shadow-lg shadow-green-400/50" />
                    </>
                  ) : (
                    <div className="w-5 h-5 bg-neutral-700 rounded-full" />
                  )}
                </div>

                {/* Vertical Line (not on last item) */}
                {index !== education.length - 1 && (
                  <div className="w-1 h-24 bg-gradient-to-b from-neutral-700 to-neutral-800" />
                )}
              </div>

              {/* Education Card */}
              <motion.div
                whileHover={{ translateY: -5 }}
                className={`w-full max-w-3xl p-6 rounded-lg border transition-all duration-300 relative ${
                  item.isCurrent
                    ? "bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 border-green-400/60 hover:border-green-400 shadow-lg shadow-green-400/20 hover:shadow-green-400/40"
                    : "bg-neutral-900/40 border-neutral-700/40 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/40"
                }`}
              >
                {/* Current Badge */}
                {item.isCurrent && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-3 right-3 px-3 py-1 bg-green-400/20 border border-green-400 rounded-full flex items-center gap-1"
                  >
                    <Badge className="w-3 h-3 text-green-400" />
                    <span className="text-xs font-semibold text-green-400">
                      Current
                    </span>
                  </motion.div>
                )}

                {/* Content */}
                <div className="space-y-3">
                  {/* Institution Name */}
                  <h3 className="text-xl font-bold text-white pr-24">
                    {item.institution}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-neutral-400">
                    <MapPin className="w-4 h-4 text-neutral-500" />
                    <span className="text-sm">{item.location}</span>
                  </div>

                  {/* Degree */}
                  <div className="flex items-start gap-2">
                    <BookOpen className="w-4 h-4 text-neutral-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-neutral-300">
                      {item.degree}
                    </span>
                  </div>

                  {/* Grade and Duration */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-2">
                    <div>
                      <p className="text-sm text-neutral-400">
                        Grade/CGPA/Percentage
                      </p>
                      <p className="text-base font-semibold text-green-400">
                        {item.grade}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-neutral-400 text-sm">
                      <Calendar className="w-4 h-4 text-neutral-500" />
                      <span>{item.duration}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
