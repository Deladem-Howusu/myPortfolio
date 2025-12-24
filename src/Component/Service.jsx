import Button from "./Button";
import { CodeXml, Palette, Smartphone } from "lucide-react";

const skillsection = [
  {
    name: "Web Development",
    icon: CodeXml,
    description:
      "Building responsive and dynamic websites using modern technologies.",
    tools: ["React", "Node.js", "Express", "MongoDB"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "UI/UX Design",
    icon: Palette,
    description:
      "Designing user-friendly interfaces and enhancing user experience.",
    tools: ["Figma", "Adobe XD", "Sketch"],
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Graphic Design",
    icon: Smartphone,
    description:
      "Creating visually appealing graphics for digital and print media.",
    tools: ["Photoshop", "Illustrator", "InDesign"],
    color: "from-purple-500 to-pink-500",
  },
];

function Service({ darkmode }) {
  return (
    <section
      id="skills"
      className={`h-fit w-full px-3 lg:px-11 py-10 lg:py-20 ${
        darkmode ? "bg-gray-900 " : "bg-[#f9f7ff]"
      } pt-5  `}
    >
      <div className="w-full">
        <h2 className={`${darkmode ? "text-blue-400" : "text-blue-600"} mb-4`}>
          Services I Offer
        </h2>
        <div className="block lg:flex justify-between ">
          <div>
            <h3
              className={`${
                darkmode ? "text-gray-400" : "text-gray-600"
              } mb-4 text-2xl lg:text-3xl poppins font-semibold `}
            >
              Innovative Solutions in Design and Development
            </h3>
          </div>
          <div>
            <p
              className={`${
                darkmode ? "text-gray-400" : "text-gray-600"
              } mb-5 max-w-xl`}
            >
              I work with businesses to create innovative and effective digital
              solutions that drive growth and success.
            </p>
            {/* <Button>View Services</Button> */}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center md:gap-11 gap-10 mt-20">
        {skillsection.map((skill) => (
          <div
            key={skill.name}
            className={`  ${
              darkmode ? "bg-gray-800" : "bg-white"
            } rounded-xl px-5 py-10 card cursor-pointer w-89 lg:w-100`}
          >
            <div
              className={`inline-block p-4 bg-linear-to-br ${skill.color} rounded-xl mb-4 shadow-lg`}
            >
              <skill.icon className="w-8 h-8 text-white" />
            </div>
            <h4
              className={`${
                darkmode ? "text-gray-400" : "text-gray-600"
              } mb-5 max-w-xl font-semibold`}
            >
              {skill.name}
            </h4>

            <p
              className={`${
                darkmode ? "text-gray-400" : "text-gray-600"
              } mb-5 max-w-xl`}
            >
              {skill.description}
            </p>
            <ul className="flex gap-3">
              {skill.tools.map((tool) => (
                <li
                  key={tool}
                  className={`${
                    darkmode
                      ? "text-blue-400 bg-gray-700"
                      : "text-gray-600 bg-gray-100"
                  } w-fit  text-xs px-3 py-1 rounded-xl cursor-pointer hover:scale-105 transition-all`}
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;
