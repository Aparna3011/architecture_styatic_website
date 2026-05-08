import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useJournal } from "../api/useJournal";
import {
  pageTransition,
  fadeInUp,
  staggerContainer,
} from "../utils/animations";
import { formatDate } from "../utils/helpers";

const categories = [
  "All",
  "Design",
  "Process",
  "Awards",
  "Culture",
  "Sustainability",
];

export default function Journal() {
  const { articles = [], isLoading } = useJournal();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = useMemo(() => {
    if (activeCategory === "All") return articles;
    return (articles || []).filter((a) => a.category === activeCategory);
  }, [articles, activeCategory]);

  const featuredArticle = articles[0];
  const remainingArticles = (filteredArticles || []).filter(
    (a) => a.id !== featuredArticle?.id,
  );

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="pt-32"
    >
      <section className="px-6 lg:px-12 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.span
              variants={fadeInUp}
              className="text-sm tracking-[0.3em] text-primary/60 uppercase mb-6 block"
            >
              Insights
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] mb-8"
            >
              The
              <br />
              <span className="italic text-primary/70">Journal</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-primary/70 max-w-xl"
            >
              Thoughts on architecture, design culture, and the creative process
              from our studio.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 lg:px-12 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm tracking-[0.15em] uppercase transition-all duration-300 pb-1 border-b ${activeCategory === category ? "border-primary text-primary" : "border-transparent text-primary/50 hover:text-primary"}`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {featuredArticle && activeCategory === "All" && (
        <section className="px-6 lg:px-12 mb-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/journal/${featuredArticle.slug}`}
                className="group grid lg:grid-cols-2 gap-12"
              >
                <div className="aspect-[4/3] bg-primary/5 overflow-hidden">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-xs tracking-[0.2em] text-primary/50 uppercase mb-4">
                    Featured — {featuredArticle.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-light mb-4 group-hover:text-primary/70 transition-colors leading-tight">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-primary/60 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-primary/50">
                    <span>{featuredArticle.author}</span>
                    <span>·</span>
                    <span>{formatDate(featuredArticle.date)}</span>
                    <span>·</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      <section className="px-6 lg:px-12 pb-32">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[4/3] bg-primary/10 mb-4" />
                  <div className="h-6 bg-primary/10 w-3/4 mb-2" />
                  <div className="h-4 bg-primary/10 w-1/2" />
                </div>
              ))}
            </div>
          ) : (
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {remainingArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  variants={fadeInUp}
                  custom={index}
                >
                  <Link to={`/journal/${article.slug}`} className="group block">
                    <div className="aspect-[4/3] bg-primary/5 overflow-hidden mb-6">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <span className="text-xs tracking-[0.2em] text-primary/50 uppercase mb-3 block">
                      {article.category}
                    </span>
                    <h3 className="text-xl font-light mb-3 group-hover:text-primary/70 transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-sm text-primary/60 mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-primary/50">
                      <span>{formatDate(article.publishDate)}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </motion.div>
  );
}
