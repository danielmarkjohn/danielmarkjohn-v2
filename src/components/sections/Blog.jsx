
import React from "react";
import { ExternalLink } from "lucide-react";
import { config } from "../../data/config";

export default function Blog(){
  return (
    <section id="blog" aria-labelledby="blog-title">
      <h2 id="blog-title" className="text-3xl font-bold mb-6">Latest Articles</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {config.articles.map((article, i) => (
          <a key={i} href={article.link} target="_blank" rel="noopener" className="block p-6 bg-white rounded-lg shadow-sm border border-slate-200 hover:shadow-md hover:border-primary transition-all">
            <div className="text-xs text-muted mb-2">{article.date}</div>
            <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
            <p className="text-sm text-slate-600 mb-3">{article.excerpt}</p>
            <div className="flex items-center gap-1 text-primary text-sm">
              Read more <ExternalLink size={14} />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

