import { motion } from "motion/react";

const words = [
  "Hardworking",
  "Creative",
  "Focused",
  "Team Player",
  "Innovative",
  "Problem Solver",
  "Fast Learner",
];

export default function Marquee() {
  return (
    <div className=" slide overflow-hidden w-full bg-[#44225e] py-2 ">
      <motion.div
        className="flex gap-20 text-xl font-medium text-white whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          duration: 80, // how long one full slide takes
          repeat: Infinity, // loop forever
          ease: "linear", // smooth constant speed
        }}
      >
        {/* first copy */}
        {words.map((w, i) => (
          <span key={i}>{w}</span>
        ))}

        {/* second copy for seamless looping */}
        {words.map((w, i) => (
          <span key={`copy-${i}`}>{w}</span>
        ))}
      </motion.div>
    </div>
  );
}
