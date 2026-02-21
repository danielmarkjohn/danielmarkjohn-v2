
import React from "react";
import { Github, Linkedin, Mail, Calendar } from "lucide-react";
import { config } from "../../data/config";

export default function Hero(){
  return (
    <section className="py-12 min-h-[60vh] flex items-center" aria-labelledby="hero-title">
      <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
        <div>
          <h1 id="hero-title" className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {config.personal.name}
          </h1>
          <p className="mt-3 text-xl text-muted">{config.personal.title}</p>
          <p className="mt-2 text-lg text-slate-600">{config.personal.subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3 items-center">
            <a href={`mailto:${config.personal.email}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 hover:border-primary transition-colors">
              <Mail size={18} /> Email
            </a>
            <a href={config.personal.github} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 hover:border-primary transition-colors">
              <Github size={18} /> GitHub
            </a>
            <a href={config.personal.linkedin} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 hover:border-primary transition-colors">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href={config.personal.topmate} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors">
              <Calendar size={18} /> Schedule Call
            </a>
            <a href={config.personal.resumeUrl} target="_blank" rel="noopener" className="inline-flex items-center px-6 py-2.5 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors shadow-lg">
              Download Resume
            </a>
          </div>
        </div>
        <div className="rounded-2xl p-8 shadow-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-purple-500/5 border border-slate-200">
          <p className="text-sm font-medium text-muted uppercase tracking-wide">Key Metrics</p>
          <ul className="mt-6 grid grid-cols-2 gap-6">
            {config.metrics.map(m => (
              <li key={m.label} className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <strong className="text-3xl font-bold text-primary">{m.value}</strong>
                <p className="text-sm text-muted mt-1">{m.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}




