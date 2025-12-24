import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Award, Briefcase, Coffee, Users } from "lucide-react";
import { useState } from "react";

export function About({ darkmode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [open, setOpen] = useState(false);

  return (
    <section
      id="about"
      ref={ref}
      className={`py-24 ${darkmode ? "bg-gray-900" : "bg-[#f9f7ff]"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className={`${darkmode ? "text-blue-400" : "text-blue-600"} mb-4`}
          >
            About Me
          </h2>
          <h3 className={`${darkmode ? "text-white" : "text-gray-900"} mb-4`}>
            Passionate Developer & Creative Thinker
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl transform rotate-6"></div>
              <img
                src="deladem copy.jpg"
                alt="Workspace"
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3
              className={`${
                darkmode ? "text-white" : "text-gray-900"
              } mb-6 font-medium`}
            >
              Hi there! I'm Jerry Deladem
            </h3>
            <p
              className={`${
                darkmode ? "text-gray-400" : "text-gray-600"
              } mb-4 `}
            >
              I'm a full-stack developer with a strong focus on building modern,
              high-performance web applications. I enjoy transforming ideas into
              clean, functional, and visually compelling digital experiences
              using technologies like React, Node.js, and modern JavaScript
              tooling.
            </p>
            <h2
              onClick={() => setOpen(!open)}
              className={`${
                darkmode ? "text-blue-400" : "text-blue-600"
              } mb-4 block lg:hidden `}
            >
              {!open && "Read More ▼"}
            </h2>
            <div className={`${open ? "block" : "hidden"} lg:block`}>
              <p
                className={`${
                  darkmode ? "text-gray-400" : "text-gray-600"
                } mb-4`}
              >
                My journey in software development has been shaped by continuous
                learning, real-world problem-solving, and a passion for creating
                products that actually help people. I’ve worked on projects
                involving user authentication, interactive UI components, API
                integrations, and community-driven platforms — including iGift,
                a system that connects people who want to give or request items
                they no longer use.
              </p>
              <p
                className={`${
                  darkmode ? "text-gray-400" : "text-gray-600"
                } mb-6`}
              >
                Outside of coding, I stay active by exploring new design trends,
                experimenting with emerging technologies, and refining my
                approach to software craftsmanship.
              </p>
              <div className="flex flex-wrap gap-3">
                {["React", "Node.js", "Tailwind CSS", "Photoshop"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className={`px-4 py-2 ${
                        darkmode
                          ? "bg-gray-800 text-blue-400"
                          : "bg-blue-50 text-blue-600"
                      } rounded-full`}
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          <h2
            onClick={() => setOpen(!open)}
            className={`${
              darkmode ? "text-blue-400" : "text-blue-600"
            } mb-4 block lg:hidden `}
          >
            {open && "Show less ▲"}
          </h2>
        </div>
      </div>
    </section>
  );
}
