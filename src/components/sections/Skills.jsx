
import React from "react";
import { skills } from "../../data/skills";

function SkillPill({label}){
  return <span className="inline-block px-3 py-1 rounded-full border text-sm">{label}</span>
}

export default function Skills(){
  const skillCategories = [
    {
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      skills: ["React", "Angular", "TypeScript", "Tailwind CSS", "Next.js", "Vite"]
    },
    {
      title: "Backend",
      color: "from-emerald-500 to-teal-500",
      skills: ["Node.js", "Express", "NestJS", "GraphQL", "REST APIs", "Microservices"]
    },
    {
      title: "Database",
      color: "from-amber-500 to-orange-500",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Elasticsearch"]
    },
    {
      title: "DevOps & Cloud",
      color: "from-purple-500 to-pink-500",
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"]
    },
    {
      title: "Architecture",
      color: "from-rose-500 to-red-500",
      skills: ["Microfrontends", "System Design", "Event-Driven", "CQRS", "DDD"]
    },
    {
      title: "Tools & Others",
      color: "from-indigo-500 to-blue-500",
      skills: ["Git", "Webpack", "Vite", "Jest", "Cypress", "Figma"]
    }
  ];

  return (
    <section id="skills" aria-labelledby="skills-title">
      <h2 id="skills-title" className="text-3xl font-bold mb-6">Technical Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
            <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${category.color} text-white font-semibold mb-4`}>
              {category.title}
            </div>
            <ul className="space-y-2">
              {category.skills.map((skill, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
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


