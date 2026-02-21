
import React from "react";
import { config } from "../../data/config";

export default function Skills(){
  return (
    <section id="skills" aria-labelledby="skills-title">
      <h2 id="skills-title" className="text-3xl font-bold mb-6">Technical Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(config.skills).map(([category, items]) => (
          <div key={category} className="p-6 bg-white rounded-lg shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold mb-3 text-primary">{category}</h3>
            <ul className="space-y-2">
              {items.map(skill => (
                <li key={skill} className="text-slate-700 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}



