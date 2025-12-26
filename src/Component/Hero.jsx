import Button from "./Button";
import { motion } from "framer-motion";
import Marquee from "./Slide";

const handleProject = () => {
  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
};

const handleDownloadCV = () => {
  window.open("/Jerry Howusu_CV.pdf", "_blank");
};

export default function Hero({ darkmode }) {
  return (
    <section
      id="hero"
      className={`relative w-lvw min-h-screen pt-20 overflow-hidden md:flex md:justify-center md:items-center ${
        darkmode ? "bg-gray-900" : "bg-[#f9f7ff]"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute -top-1/2 -left-1/2 w-full h-full bg-linear-to-br ${
            darkmode
              ? "from-blue-900/20 to-purple-900/20"
              : "from-blue-200/20 to-purple-200/20"
          }  rounded-full blur-3xl`}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute -bottom-1/2 -right-1/2 w-full h-full bg-linear-to-br ${
            darkmode
              ? "from-purple-900/20 to-pink-900/20"
              : "from-purple-200/20 to-pink-200/20"
          } rounded-full blur-3xl`}
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center gap-10 lg:flex-row lg:text-left lg:justify-between">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p
              className={`text-sm md:text-base font-medium ${
                darkmode ? "text-gray-400" : "text-[#5e3a78]"
              }`}
            >
              Hello, I'm Jerry Deladem
            </p>

            <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#9b59cd]">
              Full Stack Developer
            </h1>

            <h2
              className={`mt-1 text-2xl md:text-4xl lg:text-5xl font-extrabold ${
                darkmode ? "text-gray-200" : "text-[#44225e]"
              }`}
            >
              & Graphic Designer
            </h2>

            <p
              className={`mt-4 text-sm md:text-base lg:text-lg ${
                darkmode ? "text-gray-400" : "text-[#44225e]"
              }`}
            >
              Crafting beautiful, functional, and user-centric digital
              experiences with modern technologies and creative problem-solving.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button onClick={handleDownloadCV}>Download CV</Button>
              <Button onClick={handleProject}>View my work</Button>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center z-10"
          >
            <div className="w-56 h-56 md:w-80 md:h-80 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-200">
                <img
                  src="dela.jpg"
                  alt="Jerry Deladem"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* MARQUEE */}
        <div className="mt-14 w-full">
          <Marquee />
        </div>
      </div>
    </section>
  );
}
