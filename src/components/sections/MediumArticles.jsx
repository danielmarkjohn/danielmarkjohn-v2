import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Calendar, Clock } from "lucide-react";
import { fetchMediumArticles, ARTICLE_CATEGORIES } from "../../services/mediumService";

const ArticleCard = ({ article, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <a href={article.link} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative h-48 overflow-hidden bg-slate-100">
          {!imageLoaded && (
            <div className="absolute inset-0 animate-pulse bg-slate-200" />
          )}
          <img
            src={article.thumbnail}
            alt={article.title}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6">
          <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {new Date(article.pubDate).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {article.readingTime}
            </span>
          </div>

          <h3 className="text-lg font-semibold mb-2 text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h3>

          <p className="text-sm text-slate-600 mb-4 line-clamp-3">
            {article.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {article.categories.slice(0, 2).map(cat => (
                <span
                  key={cat}
                  className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full"
                >
                  {cat}
                </span>
              ))}
            </div>

            <span className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
              Read <ExternalLink size={14} />
            </span>
          </div>
        </div>
      </a>
    </motion.article>
  );
};

export default function MediumArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    let mounted = true;

    const loadArticles = async () => {
      try {
        const data = await fetchMediumArticles();
        if (mounted) {
          setArticles(data);
        }
      } catch (error) {
        console.error('Error loading articles:', error);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadArticles();

    return () => {
      mounted = false;
    };
  }, []);

  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'All') return articles;
    return articles.filter(article =>
      article.categories.includes(selectedCategory)
    );
  }, [articles, selectedCategory]);

  if (loading) {
    return (
      <section id="medium-articles" className="py-12" aria-labelledby="medium-title">
        <h2 id="medium-title" className="text-3xl font-bold mb-6">
          Featured Medium Articles
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="h-48 bg-slate-200 animate-pulse" />
              <div className="p-6 space-y-3">
                <div className="h-4 bg-slate-200 rounded animate-pulse w-3/4" />
                <div className="h-4 bg-slate-200 rounded animate-pulse w-1/2" />
                <div className="h-20 bg-slate-200 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="medium-articles" className="py-12" aria-labelledby="medium-title">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h2 id="medium-title" className="text-3xl font-bold">
          Featured Medium Articles
        </h2>

        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Article categories">
          {ARTICLE_CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              role="tab"
              aria-selected={selectedCategory === category}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-primary hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filteredArticles.length === 0 ? (
        <div className="text-center py-12 text-slate-500">
          <p>No articles found in this category.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => (
            <ArticleCard key={article.link} article={article} index={index} />
          ))}
        </div>
      )}

      <div className="mt-8 text-center">
        <a
          href="https://medium.com/@danielmarkjohn"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-md hover:shadow-lg"
        >
          View All Articles on Medium
          <ExternalLink size={18} />
        </a>
      </div>
    </section>
  );
}