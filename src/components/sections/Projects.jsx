
import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { config } from "../../data/config";

export default function Projects(){
  return (
    <section id="projects" aria-labelledby="projects-title">
      <h2 id="projects-title" className="text-3xl font-bold mb-6">Featured Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {config.projects.map((project, i) => (
          <div key={i} className="p-6 bg-white rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-slate-600 text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map(t => (
                <span key={t} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}



