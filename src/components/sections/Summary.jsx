
import React from "react";
import { config } from "../../data/config";

export default function Summary(){
  return (
    <section id="summary" aria-labelledby="summary-title">
      <h2 id="summary-title" className="text-3xl font-bold mb-4">Professional Summary</h2>
      <p className="text-lg text-slate-700 leading-relaxed">
        {config.summary}
      </p>
    </section>
  )
}



