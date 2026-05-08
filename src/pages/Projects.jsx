import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useProjects } from '../api/useProjects'
import { pageTransition, fadeInUp, staggerContainer } from '../utils/animations'

const categories = ['All', 'Residential', 'Commercial', 'Cultural', 'Hospitality']

export default function Projects() {
  const { data: projects = [], loading: isLoading } = useProjects()
  const [activeCategory, setActiveCategory] = useState('All')
  const [viewMode, setViewMode] = useState('grid')

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects
    return projects.filter(p => p.typology === activeCategory)
  }, [projects, activeCategory])

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
          <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <motion.span variants={fadeInUp} className="font-mono text-xs tracking-[0.3em] text-stone uppercase mb-6 block">
              Portfolio
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] mb-8 text-basalt">
              Selected<br /><span className="italic text-basalt/70">Works</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      <section className="px-6 lg:px-12 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <motion.div className="flex flex-wrap gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-sm tracking-[0.15em] uppercase transition-all duration-300 pb-1 border-b ${
                    activeCategory === category ? 'border-basalt text-basalt' : 'border-transparent text-stone hover:text-basalt'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
            <motion.div className="flex gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <button onClick={() => setViewMode('grid')} className={`p-2 transition-opacity ${viewMode === 'grid' ? 'opacity-100' : 'opacity-40'}`} aria-label="Grid view">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><rect x="0" y="0" width="8" height="8" /><rect x="12" y="0" width="8" height="8" /><rect x="0" y="12" width="8" height="8" /><rect x="12" y="12" width="8" height="8" /></svg>
              </button>
              <button onClick={() => setViewMode('list')} className={`p-2 transition-opacity ${viewMode === 'list' ? 'opacity-100' : 'opacity-40'}`} aria-label="List view">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><rect x="0" y="0" width="20" height="4" /><rect x="0" y="8" width="20" height="4" /><rect x="0" y="16" width="20" height="4" /></svg>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-32">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="grid md:grid-cols-2 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[4/3] bg-basalt/10 mb-4" />
                  <div className="h-6 bg-basalt/10 w-3/4 mb-2" />
                  <div className="h-4 bg-basalt/10 w-1/2" />
                </div>
              ))}
            </div>
          ) : (
            <AnimatePresence mode="wait">
              {viewMode === 'grid' ? (
                <motion.div key="grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid md:grid-cols-2 gap-8">
                  {filteredProjects.map((project, index) => (
                    <motion.div key={project.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                      <Link to={`/projects/${project.slug}`} className="group block">
                        <div className="aspect-[4/3] bg-basalt/5 overflow-hidden mb-6">
                          <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-display text-2xl font-light mb-2 text-basalt group-hover:text-basalt/70 transition-colors">{project.title}</h3>
                            <p className="text-sm text-stone">{project.location} — {project.year}</p>
                          </div>
                          <span className="font-mono text-xs tracking-[0.2em] text-stone uppercase">{project.typology}</span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-0">
                  {filteredProjects.map((project, index) => (
                    <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
                      <Link to={`/projects/${project.slug}`} className="group flex items-center justify-between py-8 border-b border-stone/15 hover:border-stone/40 transition-colors">
                        <div className="flex items-center gap-8">
                          <div className="w-32 h-24 bg-basalt/5 overflow-hidden flex-shrink-0">
                            <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                          </div>
                          <div>
                            <h3 className="font-display text-2xl font-light mb-1 text-basalt group-hover:text-basalt/70 transition-colors">{project.title}</h3>
                            <p className="text-sm text-stone">{project.location}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-12">
                          <span className="font-mono text-xs tracking-[0.2em] text-stone uppercase hidden md:block">{project.typology}</span>
                          <span className="text-sm text-stone">{project.year}</span>
                          <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          )}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-16 pt-8 border-t border-stone/15">
<p className="text-sm text-stone">
  Showing {(filteredProjects || []).length} of {(projects || []).length} projects
</p>          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
