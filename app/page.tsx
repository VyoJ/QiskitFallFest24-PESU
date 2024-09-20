"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUpIcon } from "lucide-react";

export default function Component() {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const sections = ["home", "schedule", "sponsors", "organizers"];

  const handleScroll = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-white bg-[#1c1c1c] bg-cover bg-center bg-fixed" style={{backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SZS341VSZ83wNn30pLYOQYABbvcLgA.png')"}}>
      <div className="bg-black bg-opacity-50 min-h-screen">
        <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5QvuVEoNby0GEtnMJE8SBNGQug6rDm.png" 
              alt="Qiskit Fall Fest 2024 Logo" 
              className="h-12 w-12"
            />
            <ul className="flex space-x-6">
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
                className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
              >
                Qiskit Fall Fest 2024
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-xl md:text-2xl mb-4"
              >
                PES University, Bangalore
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
                className="text-lg md:text-xl mb-8"
              >
                Organized by Quantumania in collaboration with QuaNaD Lab
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
              <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Event Schedule
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    time: "October 2024",
                    title: "Quantum Computing Workshops",
                    description: "Series of workshops on Qiskit and quantum computing fundamentals",
                  },
                  {
                    time: "November 2024",
                    title: "Quantum Hackathon",
                    description: "Apply your quantum knowledge in a competitive setting",
                  },
                  {
                    time: "November 2024",
                    title: "Guest Lecture",
                    description: "Special talk by a Quantum expert",
                  },
                ].map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300"
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
              <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
                Our Sponsors
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Qiskit",
                    logo: "/placeholder.svg?height=100&width=200",
                  },
                  {
                    name: "IBM Quantum",
                    logo: "/placeholder.svg?height=100&width=200",
                  },
                  {
                    name: "PES University",
                    logo: "/placeholder.svg?height=100&width=200",
                  },
                ].map((sponsor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm flex flex-col items-center justify-center hover:bg-opacity-20 transition-all duration-300"
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
              <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600">
                Organizers
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-4">
                    Quantumania - PES University Quantum Club
                  </h3>
                  <p className="text-gray-300 mb-4">
                    A student-led club dedicated to fostering knowledge in Quantum Physics and Quantum Computing through diverse activities, peer learning, and collaborative projects.
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
                  className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-4">
                    QuaNaD Lab - Quantum and Nano Devices Lab, PESU
                  </h3>
                  <p className="text-gray-300 mb-4">
                    An interdisciplinary research team exploring quantum principles in materials science and physics, focusing on quantum dots, quantum computing, conducting glasses, and battery materials.
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
            <p>&copy; 2024 Qiskit Fall Fest - PES University. All rights reserved.</p>
          </div>
        </footer>

        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-4 right-4 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full shadow-lg transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ChevronUpIcon className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}