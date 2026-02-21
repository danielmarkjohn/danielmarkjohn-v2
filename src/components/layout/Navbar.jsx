
import React from "react";
import DarkToggle from "../ui/DarkToggle";
import { FileDown } from "lucide-react";

function NavLink({ href, children }){
  return <a href={href} className="px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm font-medium">{children}</a>
}

export default function Navbar(){
  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between" aria-label="Primary">
        <div className="flex items-center gap-3">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">DM</a>
        </div>
        <div className="hidden md:flex items-center gap-1" role="navigation" aria-label="Section links">
          <NavLink href="#summary">Summary</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <a className="ml-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-medium hover:shadow-lg transition-all" href="/resume.pdf" target="_blank" rel="noopener">
            <FileDown size={16} />
            Resume
          </a>
          <div className="ml-2">
            <DarkToggle />
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden flex items-center gap-2">
          <a href="/resume.pdf" className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-primary text-white text-sm font-medium" target="_blank" rel="noopener">
            <FileDown size={14} />
            Resume
          </a>
          <DarkToggle />
        </div>
      </nav>
    </header>
  )
}


