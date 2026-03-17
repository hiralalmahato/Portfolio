import { motion } from "framer-motion";
import { useState } from "react";
import {
  Share2,
  User,
  Mail,
  MessageSquare,
  Send,
  Linkedin,
  Code2,
  Github,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // TODO: Integrate EmailJS here
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const socialLinks = [
    {
      icon: Linkedin,
      title: "Let's Connect",
      subtitle: "on LinkedIn",
      url: "https://www.linkedin.com/in/hiralal-mahato/",
      iconColor: "text-blue-400",
      bgColor: "bg-blue-900/30",
    },
    {
      icon: Code2,
      title: "LeetCode",
      subtitle: "@hiralalmahato",
      url: "https://leetcode.com/u/hiralalmahato",
      iconColor: "text-orange-400",
      bgColor: "bg-orange-900/30",
    },
    {
      icon: Github,
      title: "Github",
      subtitle: "@hiralalmahato",
      url: "https://github.com/hiralalmahato",
      iconColor: "text-gray-300",
      bgColor: "bg-white/10",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 border-t border-neutral-900/50"
      style={{ backgroundColor: "rgba(11, 11, 11, 0.3)" }}
    >
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "800px",
            height: "800px",
            background:
              "radial-gradient(circle at 30% 40%, rgba(168, 85, 247, 0.1) 0%, transparent 40%), radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.1) 0%, transparent 40%), radial-gradient(circle at 50% 80%, rgba(34, 197, 94, 0.08) 0%, transparent 40%)",
            filter: "blur(120px)",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-2xl mx-auto px-6 relative z-10"
      >
        {/* Main Card Container */}
        <motion.div
          variants={itemVariants}
          className="backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
          }}
        >
          {/* PART 1 — Get in Touch Form */}
          <div className="mb-12">
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Get in Touch
              </h2>
              <Share2 size={24} className="text-neutral-500" />
            </div>

            {/* Subtitle */}
            <p className="text-neutral-400 mb-8">
              Have something to discuss? Send me a message and let's talk.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <User size={20} className="text-neutral-500" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-400/50 transition-colors"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <Mail size={20} className="text-neutral-500" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-400/50 transition-colors"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <div className="absolute left-4 top-4">
                  <MessageSquare size={20} className="text-neutral-500" />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="6"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-400/50 transition-colors resize-none"
                  required
                />
              </div>

              {/* Send Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 rounded-xl font-semibold hover:opacity-90 transition-all hover:shadow-lg hover:shadow-purple-500/30"
              >
                <Send size={20} />
                {submitted ? "Message Sent! ✓" : "Send Message"}
              </button>
            </form>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10 mb-12" />

          {/* PART 2 — Connect With Me */}
          <div>
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-0.5 bg-purple-500" />
              <h3 className="text-lg font-bold text-white">Connect With Me</h3>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              {socialLinks.map((social, index) => {
                const SocialIcon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all group cursor-pointer"
                  >
                    {/* Icon Container */}
                    <div className={`p-3 rounded-lg ${social.bgColor}`}>
                      <SocialIcon size={24} className={social.iconColor} />
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <p className="font-bold text-white group-hover:text-purple-400 transition-colors">
                        {social.title}
                      </p>
                      <p className="text-sm text-neutral-500">{social.subtitle}</p>
                    </div>

                    {/* Arrow */}
                    <div className="text-neutral-500 group-hover:text-purple-400 transition-colors">
                      →
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p
          variants={itemVariants}
          className="text-center text-neutral-500 text-sm mt-8"
        >
          © 2026 - All Rights Reserved.
        </motion.p>
      </motion.div>
    </section>
  );
}
