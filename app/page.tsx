"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";

export default function Component() {
  const [activeSection, setActiveSection] = useState("home");

  const sections = ["home", "schedule", "sponsors", "organizers"];

  const handleScroll = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
    <div className="min-h-screen text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-6">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => handleScroll(section)}
                  className={`text-sm uppercase tracking-wider ${
                    activeSection === section ? "text-purple-400" : "text-white"
                  } hover:text-purple-300 transition-colors`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              Quantum Horizons 2023
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-2xl mb-8"
            >
              Exploring the Future of Quantum Computing
            </motion.p>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-colors"
              onClick={() => handleScroll("schedule")}
            >
              View Schedule
            </motion.button>
          </div>
        </section>

        <section id="schedule" className="min-h-screen py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Event Schedule
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  time: "9:00 AM",
                  title: "Opening Ceremony",
                  description: "Welcome address and keynote speech",
                },
                {
                  time: "10:30 AM",
                  title: "Workshop: Quantum Algorithms",
                  description:
                    "Introduction to quantum algorithms and their applications",
                },
                {
                  time: "1:00 PM",
                  title: "Lunch Break",
                  description:
                    "Networking opportunity with speakers and attendees",
                },
                {
                  time: "2:00 PM",
                  title: "Hackathon Kickoff",
                  description: "Start of the 4-hour quantum coding challenge",
                },
                {
                  time: "6:00 PM",
                  title: "Hackathon Presentations",
                  description: "Teams present their quantum projects",
                },
                {
                  time: "8:00 PM",
                  title: "Closing Ceremony",
                  description: "Awards presentation and closing remarks",
                },
              ].map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm"
                >
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-purple-300 mb-2">{event.time}</p>
                  <p className="text-gray-300">{event.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="sponsors"
          className="min-h-screen py-20 bg-black bg-opacity-50"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Our Sponsors
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "QuantumTech",
                  logo: "/placeholder.svg?height=100&width=200",
                },
                {
                  name: "FutureCompute",
                  logo: "/placeholder.svg?height=100&width=200",
                },
                {
                  name: "Q-Innovations",
                  logo: "/placeholder.svg?height=100&width=200",
                },
                {
                  name: "Entangle Systems",
                  logo: "/placeholder.svg?height=100&width=200",
                },
                {
                  name: "Qubit Solutions",
                  logo: "/placeholder.svg?height=100&width=200",
                },
                {
                  name: "Superposition Inc.",
                  logo: "/placeholder.svg?height=100&width=200",
                },
              ].map((sponsor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm flex flex-col items-center justify-center"
                >
                  <img src={sponsor.logo} alt={sponsor.name} className="mb-4" />
                  <h3 className="text-xl font-semibold">{sponsor.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="organizers" className="min-h-screen py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">Organizers</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  Quantum University
                </h3>
                <p className="text-gray-300 mb-4">
                  A leading institution in quantum computing research and
                  education, dedicated to pushing the boundaries of quantum
                  technology.
                </p>
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Learn more
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  Advanced Quantum Research Center
                </h3>
                <p className="text-gray-300 mb-4">
                  A state-of-the-art facility focused on developing practical
                  applications of quantum computing and fostering collaboration
                  between academia and industry.
                </p>
                <a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Learn more
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black bg-opacity-50 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Quantum Horizons. All rights reserved.</p>
        </div>
      </footer>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-4 right-4 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full shadow-lg transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ChevronDownIcon className="w-6 h-6 transform rotate-180" />
      </motion.button>
    </div>
  );
}
