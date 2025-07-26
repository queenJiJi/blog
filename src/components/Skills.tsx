// components/TechStack.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

const skills = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
];

export default function Skills() {
  return (
    <section className="my-20 px-8">
      <h2 className="text-3xl font-bold mb-6">
        Skills<span className="text-5xl text-pink-500">.</span>
      </h2>

      <section className="w-full bg-gray-100 rounded-xl p-6 shadow-lg">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-4">
          {skills.map(({ icon: Icon, name, color }, index) => (
            <motion.div
              key={name}
              className="flex flex-col items-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition-all hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Icon size={40} style={{ color }} />
              <span className="mt-2 font-medium">{name}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
}
