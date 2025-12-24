import { Menu, X } from "lucide-react";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

export default function Navigation({ children, darkMode }) {
  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href, name) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActive(name);
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? "bg-gray-900/80 backdrop-blur-md shadow-lg"
            : "bg-white/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* NAV BAR */}
      <div
        className={`flex items-center justify-between px-4 md:px-5 py-3 ${
          darkMode ? "bg-gray-900" : "bg-[#f9f7ff]"
        }`}
      >
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img src="myLogo.png" alt="logo" className="w-10 h-10" />
          <span
            className={`text-lg font-semibold ${
              darkMode ? "text-gray-300" : "text-[#44225e]"
            }`}
          >
            Portfolio
          </span>
        </div>

        {/* DESKTOP + TABLET NAV */}
        <motion.ul
          layout
          className="hidden md:flex items-center gap-8 md:gap-5 relative"
        >
          {navItems.map((item) => (
            <li
              key={item.name}
              onClick={() => scrollToSection(item.href, item.name)}
              className={`relative cursor-pointer font-medium ${
                darkMode ? "text-gray-300" : "text-[#44225e]"
              }`}
              onMouseEnter={() => setActive(item.name)}
            >
              {item.name}

              {active === item.name && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#5e3a78] rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </li>
          ))}
        </motion.ul>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <Button onClick={() => scrollToSection("#contact")}>
              Book a Call
            </Button>
          </div>

          {children}

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: 1 }}
            exit={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className={`md:hidden border-t ${
              darkMode
                ? "bg-gray-900 border-gray-700"
                : "bg-white border-gray-200"
            }`}
          >
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: 1 }}
              exit={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className="px-4 py-3 space-y-2"
            >
              {navItems.map((item) => (
                <span
                  key={item.name}
                  onClick={() => scrollToSection(item.href, item.name)}
                  className={`block w-full text-left px-4 py-3 rounded-lg ${
                    darkMode
                      ? "text-gray-300 hover:bg-gray-800"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
