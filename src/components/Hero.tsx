"use client"
import React from "react";
import Typewriter from "typewriter-effect";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative text-center space-y-6 py-24 px-4 bg-gradient-to-r from-blue-600/10 via-gray-100 to-blue-600/10"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 animate-[fadeInUp_1s_ease-in-out]">
        Hi, I’m <span className="text-blue-600">Muhammad Abeer</span>
        <br />
        <span className="text-blue-500 text-2xl md:text-4xl mt-2 inline-block">
          <Typewriter
            options={{
              strings: [
                "Full-Stack Developer",
                "Next.js Specialist",
                "TypeScript Lover",
                "Python Enthusiast"
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </span>
      </h1>

      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto animate-[fadeInUp_1s_ease-in-out_0.2s]">
        Crafting modern, scalable web experiences with passion and precision.
      </p>

      <a
        href="#contact"
        className="inline-block mt-6 px-8 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Contact Me
      </a>
    </section>
  );
}
