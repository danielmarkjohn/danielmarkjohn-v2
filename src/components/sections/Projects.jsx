
import React from "react";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";

export default function Projects(){
  return (
    <section id="projects" aria-labelledby="projects-title">
      <h2 id="projects-title" className="text-3xl font-bold mb-6">Featured Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i)=> (
          <motion.a key={p.title} href={p.link} className="p-4 rounded-lg bg-white/60 dark:bg-slate-800/60 shadow" whileHover={{ scale: 1.02 }}>
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-muted mt-2">{p.desc}</p>
          </motion.a>
        ))}
      </div>
    </section>
  )
}


