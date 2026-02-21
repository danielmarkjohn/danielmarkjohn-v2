
import React from "react";
import { motion } from "framer-motion";
import { config } from "../../data/config";

export default function Experience(){
  return (
    <section id="experience" aria-labelledby="experience-title">
      <h2 id="experience-title" className="text-3xl font-bold mb-6">Experience</h2>
      <div className="relative">
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-slate-200" aria-hidden="true" />
        <ul className="space-y-8 ml-12">
          {config.experience.map((e, idx)=> (
            <li key={e.company} className="relative">
              <span className="absolute -left-6 top-1.5 h-3 w-3 rounded-full bg-primary" aria-hidden="true" />
              <motion.article initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay: idx*0.1}} className="p-4 bg-white rounded shadow">
                <h3 className="font-semibold">{e.role} — {e.company}</h3>
                <div className="text-sm text-muted">{e.period} • {e.location}</div>
                <p className="text-sm text-slate-600 mt-2">{e.description}</p>
                <ul className="mt-2 list-disc pl-5 space-y-1 text-sm">
                  {e.highlights.map(h=> <li key={h}>{h}</li>)}
                </ul>
              </motion.article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}



