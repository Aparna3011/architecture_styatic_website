import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useProjects } from '../../api/useProjects'
import { getTypologyColor } from '../../utils/helpers'

const filterOptions = ['All', 'Residential', 'Commercial', 'Cultural', 'Institutional', 'Public', 'Urban']

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState('All')
  const { data: projects, loading } = useProjects(activeFilter === 'All' ? null : activeFilter)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="bg-ghost py-24 lg:py-32">
      {/* Section Number */}
      <div className="absolute right-8 font-mono text-xs text-stone/30 tracking-[0.08em]">
        03
      </div>

      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display text-[clamp(48px,6vw,72px)] font-light text-basalt leading-[1.0] tracking-[-0.02em] mb-8">
            Recent Work
          </h2>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-3">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 font-mono text-xs tracking-[0.08em] uppercase border transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-basalt text-ivory border-basalt'
                    : 'bg-transparent text-stone border-stone/30 hover:border-stone hover:text-basalt'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-[4/3] bg-stone/10 animate-pulse" />
            ))}
          </div>
        )}

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          {!loading && projects && (
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projects.slice(0, 6).map((project, index) => (
                <ProjectGridCard 
                  key={project.id} 
                  project={project} 
                  index={index}
                  isLarge={index === 0 || index === 5}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function ProjectGridCard({ project, index, isLarge }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={isLarge ? 'md:col-span-2' : ''}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="group block relative overflow-hidden"
      >
        {/* Image */}
        <div className={`relative ${isLarge ? 'aspect-[16/9]' : 'aspect-[4/3]'} overflow-hidden bg-stone/10`}>
          <img
            src={project.thumbnailImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            loading="lazy"
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-basalt/0 group-hover:bg-basalt/60 transition-colors duration-500" />
          
          {/* Hover Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className={`inline-block self-start px-3 py-1 font-mono text-xs tracking-[0.08em] uppercase mb-3 ${getTypologyColor(project.typology)}`}>
              {project.typology}
            </span>
            <h3 className="font-display text-xl lg:text-2xl font-light text-ivory leading-tight mb-2">
              {project.title}
            </h3>
            <div className="flex items-center gap-3">
              <span className="font-sans text-sm text-ivory/70">{project.city}</span>
              <span className="w-1 h-1 rounded-full bg-ivory/40" />
              <span className="font-mono text-sm text-ivory/70">{project.year}</span>
            </div>
          </div>
        </div>

        {/* Default Info (visible when not hovering) */}
        <div className="mt-4 group-hover:opacity-0 transition-opacity duration-300">
          <h3 className="font-display text-lg text-basalt leading-tight mb-1">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-stone tracking-[0.05em] uppercase">
            {project.city} — {project.year}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}
