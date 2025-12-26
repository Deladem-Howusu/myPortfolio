import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

export function Experience({ darkmode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      type: "education",
      title: "BSc. Computer Science",
      company: "University of Cape Coast",
      location: "Cape Coast, Ghana",
      period: "2023 - Present",
      description:
        "Leading a team of 5 developers in building scalable web applications. Implemented microservices architecture resulting in 40% performance improvement.",
      achievements: [
        "Strong foundation in programming and problem-solving",
        "Actively building personal and academic projects",
        "Strong foundation in programming and problem-solving",
        "Web Development, DBMS, Data Structures & Algorithms",
      ],
    },

    {
      type: "work",
      title: "IT & Data Entry Personnel",
      company: "C’est Bon LLC",
      location: "USA & Ghana",
      period: "2024 – Present",
      description:
        "Working as an IT and Data Entry personnel in a logistics and services company that specializes in international shipping, documentation support, and retail operations.",
      achievements: [
        "Handled accurate data entry and management for shipping and client records",
        "Assisted migrants with filling and reviewing USCIS forms for green card and other applications",
        "Provided IT support and basic system troubleshooting for daily operations",
        "Supported business operations in logistics, documentation, and retail (perfume sales)",
        "Successfully balanced full-time work responsibilities alongside university studies",
      ],
    },

    {
      type: "work",
      title: "Software Development Intern",
      company: "Qliq Integrations",
      location: "Takoradi, Ghana",
      period: "Internship",
      description:
        "Worked as a software development intern, where I strengthened my practical skills in frontend development, web design, and backend API creation using C#.",
      achievements: [
        "Polished frontend development skills through real-world projects",
        "Designed and implemented responsive web interfaces",
        "Built and consumed APIs using C#",
        "Gained hands-on experience working in a professional development environment",
      ],
    },

    {
      type: "education",
      title: "West African Senior School Certificate",
      company: "St. Augustine's College",
      location: "Cape Coast, Ghana",
      period: "2021 - 2023",
      description:
        "Specialized in Software Engineering and Human-Computer Interaction. Graduated with honors.",
      achievements: [
        "Studied core science subjects including Mathematics, Physics, Chemistry, and Biology",
        "Developed analytical thinking and problem-solving skills",
        "Built a strong academic foundation for Computer Science studies",
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-24 bg-gradient-to-br overflow-x-hidden ${
        darkmode ? "from-gray-800 to-gray-900" : "from-blue-50 to-purple-50"
      }`}
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
            Experience & Education
          </h2>
          <h3 className={`${darkmode ? "text-white" : "text-gray-900"} mb-4`}>
            My Professional Journey
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative grid lg:grid-cols-2 gap-8 
                    ${index % 2 === 0 ? "" : "lg:flex-row-reverse"}`}
              >
                {/* Content */}
                <div className={index % 2 === 0 ? "" : "lg:col-start-2"}>
                  <div
                    className={`inline-block ${
                      darkmode ? "bg-gray-800" : "bg-white"
                    } rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all`}
                  >
                    <div
                      className={`flex items-center gap-3 mb-6 ${
                        index % 2 === 0 ? "lg:text-right" : ""
                      }`}
                    >
                      {exp.type === "work" ? (
                        <div
                          className={`p-3 ${
                            darkmode ? "bg-blue-900/30" : "bg-blue-100"
                          } rounded-lg`}
                        >
                          <Briefcase
                            className={`w-6 h-6 ${
                              darkmode ? "text-blue-400" : "text-blue-600"
                            }`}
                          />
                        </div>
                      ) : (
                        <div
                          className={`p-3 ${
                            darkmode ? "bg-purple-900/30" : "bg-purple-100"
                          } rounded-lg`}
                        >
                          <GraduationCap
                            className={`w-6 h-6 ${
                              darkmode ? "text-purple-400" : "text-purple-600"
                            }`}
                          />
                        </div>
                      )}
                      <div
                        className={`flex items-center gap-2 ${
                          darkmode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <h4
                      className={`${
                        darkmode ? "text-white" : "text-gray-900"
                      } mb-2`}
                    >
                      {exp.title}
                    </h4>
                    <div
                      className={`${
                        darkmode ? "text-blue-400" : "text-blue-600"
                      } mb-1`}
                    >
                      {exp.company}
                    </div>
                    <div
                      className={`${
                        darkmode ? "text-gray-500" : "text-gray-500"
                      } mb-4`}
                    >
                      {exp.location}
                    </div>
                    {/* <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p> */}

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, id) => (
                        <div
                          key={id}
                          className={`flex items-start gap-2 ${
                            darkmode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${
                              darkmode ? "bg-blue-400" : "bg-blue-600"
                            } mt-2 shrink-0`}
                          ></div>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`w-6 h-6 rounded-full ${
                      exp.type === "work"
                        ? "bg-blue-600 dark:bg-blue-500"
                        : "bg-purple-600 dark:bg-purple-500"
                    } shadow-lg ring-4 ring-white dark:ring-gray-900`}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Experience;
