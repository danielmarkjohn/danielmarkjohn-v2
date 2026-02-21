
import React from "react";

const posts = [
  {title:"Designing Scalable Microfrontends", date:"2024-11-10", excerpt:"Patterns and pitfalls when designing multi-tenant editorial frontends."},
  {title:"CI/CD for Large Teams", date:"2023-06-01", excerpt:"Practical pipeline patterns for stability and speed."}
];

export default function Blog(){
  return (
    <section id="blog" className="py-12" aria-labelledby="blog-title">
      <h2 id="blog-title" className="text-2xl font-semibold mb-6">Articles</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {posts.map(p=> (
          <article key={p.title} className="p-4 bg-white/60 dark:bg-slate-800/60 rounded shadow">
            <h3 className="font-semibold">{p.title}</h3>
            <div className="text-xs text-muted">{p.date}</div>
            <p className="mt-2 text-sm">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
