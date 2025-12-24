import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

export function Projects({ darkmode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "School Management System",
      description:
        "Comprehensive web application for managing school operations, including student enrollment, attendance, grading, and communication.",
      image: "work1.png",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      category: "web",
      liveUrl: "#",
      githubUrl:
        "https://github.com/Deladem-Howusu/School-Management-System.git",
    },

    {
      id: 2,
      title: "C'est Bon Landing page",
      description:
        "A landing page for C'est Bon LLC, showcasing their services and portfolio with a modern design.",
      image: "work.png",
      tags: ["Figma", "React"],
      category: "design",
      liveUrl: "https://www.cestbonllc.com/",
      githubUrl: "https://github.com/Deladem-Howusu/C-est-website.git",
    },
    {
      id: 3,
      title: "Inventory Management",
      description:
        "Cross-platform fitness tracking app with workout plans, progress tracking, and social features.",
      image: "inventory.png",
      tags: ["React", "Tailwind css"],
      category: "mobile",
      liveUrl: "#",
      githubUrl: "https://github.com/Deladem-Howusu/inventory-management.git",
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description:
        "Real-time analytics dashboard with data visualization, reporting, and custom metrics.",
      image:
        "https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzY0ODA3NTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Next.js", "PostgreSQL", "Chart.js", "AWS"],
      category: "web",
      liveUrl: "#",
      githubUrl: "#",
    },
    // {
    //   id: 5,
    //   title: "Social Media App",
    //   description:
    //     "Feature-rich social platform with real-time messaging, feed, and content sharing.",
    //   image:
    //     "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY0ODU3OTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    //   tags: ["Flutter", "Firebase", "GraphQL"],
    //   category: "mobile",
    //   liveUrl: "#",
    //   githubUrl: "#",
    // },
    {
      id: 6,
      title: "Brand Identity",
      description:
        "Complete brand identity system including logo, color palette, typography, and brand guidelines.",
      image:
        "https://images.unsplash.com/photo-1632937145991-91620be68319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHdvcmt8ZW58MXx8fHwxNzY0OTA5MzY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Illustrator", "Figma", "Photoshop"],
      category: "design",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web" },

    { id: "design", label: "Design" },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-24 ${darkmode ? "bg-gray-900" : "bg-gray-100 "}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2
            className={`${darkmode ? "text-blue-400" : "text-blue-600"} mb-4`}
          >
            Portfolio
          </h2>
          <h3 className={`${darkmode ? "text-white " : "text-gray-900"}  mb-4`}>
            Featured Projects
          </h3>
          <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === f.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : `${
                      darkmode
                        ? " bg-gray-800  text-gray-300  hover:bg-gray-700"
                        : "bg-gray-100  text-gray-700  hover:bg-gray-200 "
                    }`
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`${
                darkmode ? "bg-gray-800" : "bg-white"
              } rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h4
                  className={`${
                    darkmode ? "text-white" : "text-gray-700"
                  }  mb-2 font-semibold text-lg`}
                >
                  {project.title}
                </h4>
                <p
                  className={` ${
                    darkmode ? "text-gray-400" : "text-gray-600"
                  } mb-4`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 ${
                        darkmode
                          ? "bg-gray-700 text-blue-400"
                          : "bg-blue-50 text-blue-600"
                      }   rounded-full`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
