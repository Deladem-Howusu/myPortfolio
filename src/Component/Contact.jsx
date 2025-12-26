import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import emailjs from "emailjs-com";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useState } from "react";

export function Contact({ darkmode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission

    emailjs
      .send(
        "service_portfolio",
        "template_pdqrqlq",
        formData,
        "BgWBHQmjkgSDPkvuK"
      )
      .then(() => {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: "", email: "", subject: "", message: "" });
        }, 3000);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "deladem619@gmail.com",
      href: "mailto:deladem619@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+233 54 872 1544",
      href: "tel:+233548721544",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Accra, Ghana",
      href: "https://www.google.com/maps/place/Accra/",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Deladem-Howusu",
      color: `${darkmode ? "hover:text-white" : "hover:text-gray-900 "}`,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/jerry-howusu",
      color: "hover:text-blue-600",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "#",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-24 bg-gradient-to-br w-dvw overflow-x-hidden ${
        darkmode ? "from-gray-800 to-gray-900" : "from-blue-50 to-purple-50"
      } `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className={`${darkmode ? " text-blue-400" : "text-blue-600"} mb-4`}
          >
            Get In Touch
          </h2>
          <h3 className={`${darkmode ? "text-white " : "text-gray-900"} mb-4`}>
            Let's Work Together
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4
              className={`${darkmode ? " text-white" : "text-gray-900"} mb-6`}
            >
              Contact Information
            </h4>
            <p
              className={`${darkmode ? "text-gray-400" : "text-gray-600"} mb-8`}
            >
              Feel free to reach out to me for any inquiries, collaborations, or
              just to say hello. I'm always open to discussing new projects and
              opportunities.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target="blank"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`flex items-center gap-4 p-4 ${
                    darkmode ? "bg-gray-800" : "bg-white"
                  } rounded-xl shadow-lg hover:shadow-xl transition-all group`}
                >
                  <div
                    className={`p-3 ${
                      darkmode ? "bg-blue-900/30" : "bg-blue-100"
                    } rounded-lg group-hover:bg-blue-600 transition-colors`}
                  >
                    <info.icon
                      className={`w-6 h-6 ${
                        darkmode ? "text-blue-400" : "text-blue-600"
                      } group-hover:text-white`}
                    />
                  </div>
                  <div>
                    <div className="text-gray-500 dark:text-gray-500">
                      {info.label}
                    </div>
                    <div
                      className={`${darkmode ? "text-white" : "text-gray-600"}`}
                    >
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  target="_blank"
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 ${
                    darkmode
                      ? "bg-gray-800 text-gray-400"
                      : "bg-white text-gray-600"
                  } rounded-xl shadow-lg hover:shadow-xl transition-all   ${
                    social.color
                  }`}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className={` ${
                darkmode ? "bg-gray-800" : "bg-white"
              } rounded-2xl p-8 shadow-xl`}
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block ${
                      darkmode ? "text-gray-300" : "text-gray-700"
                    } mb-2`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3  ${
                      darkmode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "border-gray-200 text-gray-900 bg-gray-50"
                    } border   rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600  `}
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block ${
                      darkmode ? "text-gray-300" : "text-gray-700"
                    } mb-2`}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3  ${
                      darkmode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "border-gray-200 text-gray-900 bg-gray-50"
                    } border   rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600  `}
                    placeholder="Enter email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className={`block ${
                      darkmode ? "text-gray-300" : "text-gray-700"
                    } mb-2`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3  ${
                      darkmode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "border-gray-200 text-gray-900 bg-gray-50"
                    } border   rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600  `}
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block ${
                      darkmode ? "text-gray-300" : "text-gray-700"
                    } mb-2`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-3  ${
                      darkmode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "border-gray-200 text-gray-900 bg-gray-50"
                    } border   rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600  `}
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitted ? (
                    <>
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className={`mt-16 text-center ${
            darkmode ? "text-gray-400 border-gray-700" : "text-gray-600"
          } border-t border-gray-200  pt-8`}
        >
          <p>© 2025 Jerry Deladem Howusu. All rights reserved.</p>
          <p className="mt-2">Designed & Built with passion ❤️</p>
        </motion.div>
      </div>
    </section>
  );
}
