import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Download, Mail } from "lucide-react";

export const CallToAction = ({ darkmode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleDownloadCV = () => {
    // Replace with your actual CV link
    window.open("/Jerry Howusu_CV (1).pdf", "_blank");
  };

  const handleContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      className={`py-24  ${darkmode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={`relative bg-linear-to-br ${
            darkmode ? "from-gray-800 to-gray-800" : "from-blue-50 to-purple-50"
          } rounded-3xl p-12 md:p-16 overflow-hidden shadow-2xl`}
        >
          {/* Decorative Elements */}
          <div
            className={`absolute top-0 right-0 w-64 h-64 ${
              darkmode ? "bg-blue-500/10" : "bg-blue-200/30"
            } rounded-full blur-3xl`}
          ></div>
          <div
            className={`absolute bottom-0 left-0 w-64 h-64 ${
              darkmode ? "bg-purple-500/10" : "bg-purple-200/30"
            } rounded-full blur-3xl`}
          ></div>

          <div className="relative z-10 text-center">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2
                className={` ${
                  darkmode ? "text-blue-400" : "text-blue-600"
                } mb-4`}
              >
                Let's Work Together
              </h2>
              <h3
                className={`${darkmode ? "text-white" : "text-gray-900"} mb-4`}
              >
                Ready to Start Your Next Project?
              </h3>
              <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`${
                darkmode ? "text-gray-400" : "text-gray-600"
              } text-lg max-w-2xl mx-auto mb-12`}
            >
              I'm available for freelance projects and full-time opportunities.
              Let's collaborate and create something amazing together!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                onClick={handleContact}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`group px-8 py-4 bg-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all flex items-center gap-2`}
              >
                <Mail className="w-5 h-5" />
                <span>Get In Touch</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`group px-8 py-4 ${
                  darkmode
                    ? "bg-gray-700 text-blue-400  border-blue-400  hover:bg-gray-600"
                    : "bg-white text-blue-600  border-blue-600  hover:bg-blue-50"
                } transition-all flex items-center gap-2 shadow-lg border-2 rounded-xl`}
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
