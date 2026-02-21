
import React from "react";
import Hero from "./components/sections/Hero";
import Summary from "./components/sections/Summary";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import MediumArticles from "./components/sections/MediumArticles";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main className="max-w-6xl mx-auto px-4">
        <Hero />
        <div className="bg-slate-50 -mx-4 px-4 py-12">
          <Summary />
        </div>
        <div className="py-12">
          <Skills />
        </div>
        <div className="bg-slate-50 -mx-4 px-4 py-12">
          <Experience />
        </div>
        <div className="py-12">
          <Projects />
        </div>
        <div className="py-12">
          <Education />
        </div>
        <div className="bg-slate-50 -mx-4 px-4 py-12">
          <Contact />
        </div>
        <div className="bg-slate-50 -mx-4 px-4 py-12">
          <MediumArticles />
        </div>
      </main>
    </div>
  )
}




