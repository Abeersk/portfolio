"use client";

import Image from "next/image";
import proj1 from "@/assets/e-commerce.png"
import proj2 from "@/assets/portfolio.png"

const projects = [
  {
    title: "E-Commerce Store",
    image: proj1,
    description: "A modern e-commerce site built with Next.js, Tailwind CSS, and Sanity CMS.",
    github: "https://github.com/Abeersk/Hackathon_3",
    demo: "https://hackathon-3-gtzu.vercel.app",
  },
  {
    title: "Portfolio Website",
    image: proj2, 
    description: "A sleek personal portfolio to showcase my development skills.",
    github: "https://github.com/Abeersk/portfolio",
    demo: "https://heartfelt-empanada-212c14.netlify.app/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-10 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-blue-600 animate-[fadeIn_1s_ease-in-out]">
        My Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group border rounded-xl p-6 bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="rounded-md mb-4 object-cover transition-transform duration-300 group-hover:scale-105"
              placeholder="blur"
              blurDataURL="https://placehold.co/600x400/png"
            />
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-gray-800 group-hover:text-blue-600 transition-colors duration-300 my-3">
              {project.description}
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 text-sm bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}