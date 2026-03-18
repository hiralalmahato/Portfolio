import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");

  const links = [
    { name: "Home", hash: "#home" },
    { name: "About", hash: "#about" },
    { name: "Education", hash: "#education" },
    { name: "Portfolio", hash: "#portfolio" },
    { name: "Contact", hash: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => ({
        name: link.hash.slice(1),
        element: document.querySelector(link.hash),
      }));

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveLink(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (hash) => {
    setActiveLink(hash.slice(1));
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 border-b border-neutral-900 backdrop-blur-md"
      style={{ backgroundColor: "rgba(11, 11, 11, 0.8)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-lg font-medium"
        >
          <span className="text-white">Hiralal Mahato</span>
        </motion.div>

        <div className="flex gap-10 items-center">
          {links.map((link) => (
            <motion.button
              key={link.name}
              onClick={() => scrollToSection(link.hash)}
              className={`text-sm transition-all relative group font-medium ${
                activeLink === link.hash.slice(1)
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
                  : "text-neutral-400 hover:text-white"
              }`}
              whileHover={{ opacity: 1 }}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                  activeLink === link.hash.slice(1)
                    ? "w-full bg-gradient-to-r from-purple-400 to-blue-400"
                    : "w-0 group-hover:w-full bg-white"
                }`}
              />
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}