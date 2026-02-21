
import React from "react";
import { motion } from "framer-motion";

const metrics = [
  {label: "Records migrated", value: "300M+"},
  {label: "Team size led", value: "12+"},
  {label: "Years experience", value: "9+"},
  {label: "Projects delivered", value: "30+"}
];

export default function Metrics(){
  return (
    <section id="metrics" className="py-12" aria-labelledby="metrics-title">
      <h2 id="metrics-title" className="text-2xl font-semibold mb-6">Metrics</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((m, i)=> (
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} key={m.label} className="p-4 bg-white/60 dark:bg-slate-800/60 rounded text-center">
            <div className="text-2xl font-bold">{m.value}</div>
            <div className="text-sm text-muted">{m.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
