import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Calendar, Clock, TrendingUp } from "lucide-react";
import { fetchMediumArticles, ARTICLE_CATEGORIES } from "../../services/mediumService";

const ArticleCard = ({ article, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group h-full"
    >
      <a 
        href={article.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block h-full bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-primary/20 transition-all duration-500"
      >
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
          {!imageLoaded && (
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 animate-shimmer" 
                   style={{ backgroundSize: '200% 100%' }} />
            </div>
          )}
          <motion.img
            src={article.thumbnail}
            alt={article.title}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`w-full h-full object-cover ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Trending badge */}
          {index === 0 && (
            <div className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold rounded-full shadow-lg flex items-center gap-1">
              <TrendingUp size={12} />
              Latest
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
            <span className="flex items-center gap-1.5 font-medium">
              <Calendar size={14} className="text-primary" />
              {new Date(article.pubDate).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="flex items-center gap-1.5 font-medium">
              <Clock size={14} className="text-accent" />
              {article.readingTime}
            </span>
          </div>

          <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-snug">
            {article.title}
          </h3>

          <p className="text-sm text-slate-600 mb-5 line-clamp-3 leading-relaxed">
            {article.description}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <div className="flex flex-wrap gap-2">
              {article.categories.slice(0, 2).map(cat => (
                <span
                  key={cat}
                  className="px-3 py-1 bg-gradient-to-r from-slate-50 to-slate-100 text-slate-700 text-xs font-semibold rounded-lg border border-slate-200"
                >
                  {cat}
                </span>
              ))}
            </div>

            <motion.span 
              className="flex items-center gap-1.5 text-primary text-sm font-semibold"
              whileHover={{ gap: '0.5rem' }}
              transition={{ duration: 0.3 }}
            >
              Read <ExternalLink size={16} />
            </motion.span>
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
      <section id="medium-articles" className="py-16" aria-labelledby="medium-title">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            id="medium-title" 
            className="text-4xl font-bold mb-3 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent"
          >
            Featured Medium Articles
          </motion.h2>
          <p className="text-slate-600 text-lg">Insights on architecture, leadership, and modern web development</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="h-56 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 animate-shimmer" 
                   style={{ backgroundSize: '200% 100%' }} />
              <div className="p-6 space-y-4">
                <div className="h-4 bg-slate-200 rounded-lg animate-pulse w-3/4" />
                <div className="h-4 bg-slate-200 rounded-lg animate-pulse w-1/2" />
                <div className="h-24 bg-slate-200 rounded-lg animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="medium-articles" className="py-16" aria-labelledby="medium-title">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="medium-title" className="text-4xl font-bold mb-3 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Featured Medium Articles
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Insights on architecture, leadership, and modern web development
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center mb-10"
      >
        <div className="inline-flex flex-wrap gap-3 p-2 bg-white rounded-2xl shadow-sm border border-slate-200" role="tablist" aria-label="Article categories">
          {ARTICLE_CATEGORIES.map(category => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              role="tab"
              aria-selected={selectedCategory === category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30'
                  : 'bg-transparent text-slate-700 hover:bg-slate-50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {filteredArticles.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200"
        >
          <p className="text-slate-500 text-lg">No articles found in this category.</p>
        </motion.div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <ArticleCard key={article.link} article={article} index={index} />
          ))}
        </div>
      )}

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <a
          href="https://medium.com/@danielmarkj"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-xl hover:shadow-2xl hover:shadow-slate-900/20 transition-all duration-300 font-semibold text-lg group"
        >
          View All Articles on Medium
          <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </motion.div>
    </section>
  );
}
