
import React from "react";
import { config } from "../../data/config";

export default function Education(){
  return (
    <section id="education" aria-labelledby="edu-title">
      <h2 id="edu-title" className="text-3xl font-bold mb-6">Education</h2>
      <div className="space-y-4">
        {config.education.map((edu, i) => (
          <div key={i} className="p-4 bg-white rounded-lg shadow-sm border border-slate-200">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-muted mt-1">{edu.institution}</p>
            <p className="text-sm text-slate-600">{edu.location}</p>
          </div>
        ))}
      </div>
    </section>
  )
}


