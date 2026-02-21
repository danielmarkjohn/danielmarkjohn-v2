
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero(){
  return (
    <section className="py-12 min-h-[60vh] flex items-center" aria-labelledby="hero-title">
      <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
        <div>
          <h1 id="hero-title" className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Daniel Mark John
          </h1>
          <p className="mt-3 text-xl text-muted">Software Lead / Architect</p>
          <p className="mt-2 text-lg text-slate-600">MERN, Microfrontends, DevOps, AI Integrations</p>
          <div className="mt-6 flex flex-wrap gap-3 items-center">
            <a href="mailto:danielmarkj@hotmail.com" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-primary transition-colors"> 
              <Mail size={18}/> Email
            </a>
            <a href="https://github.com/danielmarkjohn" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-primary transition-colors"> 
              <Github size={18}/> GitHub
            </a>
            <a href="https://linkedin.com/in/danielmarkjohn" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-primary transition-colors"> 
              <Linkedin size={18}/> LinkedIn
            </a>
            <a href="https://medium.com/@danielmarkj" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-primary transition-colors"> 
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
              Medium
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener" className="inline-flex items-center px-6 py-2.5 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors shadow-lg">
              Download Resume
            </a>
          </div>
        </div>
        <div className="rounded-2xl p-8 shadow-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-purple-500/5 dark:from-primary/10 dark:via-accent/10 dark:to-purple-500/10 border border-slate-200 dark:border-slate-800">
          <p className="text-sm font-medium text-muted dark:text-slate-400 uppercase tracking-wide">Key Metrics</p>
          <ul className="mt-6 grid grid-cols-2 gap-6">
            <li className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
              <strong className="text-3xl font-bold text-primary">12+</strong>
              <div className="text-sm text-muted mt-1">Years Experience</div>
            </li>
            <li className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
              <strong className="text-3xl font-bold text-accent">50+</strong>
              <div className="text-sm text-muted mt-1">Projects</div>
            </li>
            <li className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
              <strong className="text-3xl font-bold text-purple-600">15+</strong>
              <div className="text-sm text-muted mt-1">Team Lead</div>
            </li>
            <li className="p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
              <strong className="text-3xl font-bold text-emerald-600">100%</strong>
              <div className="text-sm text-muted mt-1">Client Satisfaction</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}



