import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useArticle, useJournal } from '../api/useJournal'
import { pageTransition, fadeInUp, staggerContainer } from '../utils/animations'
import { formatDate } from '../utils/helpers'

export default function ArticleDetail() {
  const { slug } = useParams()
  const { data: article, loading: isLoading } = useArticle(slug)
  const { data: allArticles } = useJournal()

  const relatedArticles = useMemo(() => {
    if (!article || !Array.isArray(allArticles)) return []
    return allArticles
      .filter((a) => a.id !== article.id && a.category === article.category)
      .slice(0, 3)
  }, [allArticles, article])

  if (isLoading) {
    return (<div className="min-h-screen flex items-center justify-center"><div className="animate-pulse text-stone">Loading...</div></div>)
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="font-display text-4xl font-light mb-4 text-basalt">Article Not Found</h1>
        <Link to="/journal" className="font-mono text-xs tracking-[0.2em] uppercase text-ochre hover:text-gold transition-colors">Back to Journal</Link>
      </div>
    )
  }

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition} className="pt-32">
      <section className="px-6 lg:px-12 mb-16">
        <div className="max-w-4xl mx-auto">
          <motion.div variants={staggerContainer} initial="initial" animate="animate">
            <motion.div variants={fadeInUp} className="mb-8">
              <Link to="/journal" className="font-mono text-xs tracking-[0.2em] uppercase text-stone hover:text-basalt transition-colors">Back to Journal</Link>
            </motion.div>
            <motion.span variants={fadeInUp} className="font-mono text-xs tracking-[0.2em] text-stone uppercase mb-4 block">{article.category}</motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 text-basalt">{article.title}</motion.h1>
            <motion.div variants={fadeInUp} className="flex items-center gap-4 text-sm text-stone">
              <span>{article.author}</span><span>·</span><span>{formatDate(article.date)}</span><span>·</span><span>{article.readTime}</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 lg:px-12 mb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="aspect-[21/9] bg-basalt/5 overflow-hidden">
            <img
              src={article.heroImage}
              alt={article.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.onerror = null
                e.currentTarget.src = '/placeholder.jpg'
              }}
            />
          </motion.div>
        </div>
      </section>

      <section className="px-6 lg:px-12 mb-24">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="prose prose-lg max-w-none">
            <p className="text-xl text-basalt/80 leading-relaxed mb-8">{article.excerpt}</p>
            <div className="space-y-6 text-stone leading-relaxed">
              {(article.body || '').split('\n\n').filter(Boolean).map((paragraph, index) => (<p key={index}>{paragraph}</p>))}
            </div>
          </motion.div>
        </div>
      </section>

      {article.tags && article.tags.length > 0 && (
        <section className="px-6 lg:px-12 mb-24">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-3">
              {article.tags.map((tag) => (<span key={tag} className="px-4 py-2 bg-basalt/5 text-sm text-stone">{tag}</span>))}
            </div>
          </div>
        </section>
      )}

      <section className="px-6 lg:px-12 mb-24">
        <div className="max-w-3xl mx-auto">
          <div className="border-t border-b border-stone/15 py-8">
            <p className="text-sm text-stone mb-2">Written by</p>
            <p className="text-lg text-basalt">{article.author}</p>
          </div>
        </div>
      </section>

      {relatedArticles && relatedArticles.length > 0 && (
        <section className="px-6 lg:px-12 py-24 bg-basalt/5">
          <div className="max-w-7xl mx-auto">
            <h3 className="font-mono text-xs tracking-[0.3em] text-stone uppercase mb-12">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.slice(0, 3).map((related) => (
                <Link key={related.id} to={`/journal/${related.slug}`} className="group block">
                  <div className="aspect-[4/3] bg-basalt/10 overflow-hidden mb-4">
                    <img
                      src={related.heroImage}
                      alt={related.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.onerror = null
                        e.currentTarget.src = '/placeholder.jpg'
                      }}
                    />
                  </div>
                  <span className="font-mono text-xs tracking-[0.2em] text-stone uppercase mb-2 block">{related.category}</span>
                  <h4 className="font-display text-lg font-light text-basalt group-hover:text-basalt/70 transition-colors">{related.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </motion.div>
  )
}
