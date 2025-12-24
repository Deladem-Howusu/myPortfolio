import { Mail, Github, Linkedin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm">
          © {new Date().getFullYear()} Jerry Deladem. All rights reserved.
        </p>

        <div className="flex gap-5">
          <a href="#" className="hover:text-white transition">
            <Github />
          </a>
          <a href="#" className="hover:text-white transition">
            <Linkedin />
          </a>
          <a href="#contact" className="hover:text-white transition">
            <Mail />
          </a>
        </div>
      </div>
    </footer>
  );
}
