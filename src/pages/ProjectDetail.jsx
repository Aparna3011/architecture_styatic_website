import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useProject, useProjects } from '../api/useProjects'
import { pageTransition, fadeInUp, staggerContainer } from '../utils/animations'

export default function ProjectDetail() {
  const { slug } = useParams()
  const { data: project, loading: isLoading } = useProject(slug)
  const { data: allProjects } = useProjects()

  const relatedProjects = useMemo(() => {
    if (!project || !allProjects) return []
    return allProjects
      .filter((p) => p.id !== project.id && p.typology === project.typology)
      .slice(0, 2)
  }, [allProjects, project])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-stone">Loading...</div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="font-display text-4xl font-light mb-4 text-basalt">Project Not Found</h1>
        <Link to="/projects" className="font-mono text-xs tracking-[0.2em] uppercase text-ochre hover:text-gold transition-colors">Back to Projects</Link>
      </div>
    )
  }

  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition} className="pt-20">
      <section className="h-screen relative">
        <motion.div initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.5 }} className="absolute inset-0">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.onerror = null
              e.currentTarget.src = '/placeholder.jpg'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-basalt" />
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-12 pb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div variants={staggerContainer} initial="initial" animate="animate">
              <motion.span variants={fadeInUp} className="font-mono text-xs tracking-[0.3em] text-white/70 uppercase mb-4 block">{project.typology}</motion.span>
              <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[0.9] mb-4">{project.title}</motion.h1>
              <motion.p variants={fadeInUp} className="text-lg text-white/70">{project.location} — {project.year}</motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            <motion.div className="lg:col-span-2" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-display text-3xl md:text-4xl font-light mb-8 leading-tight text-basalt">{project.subtitle}</h2>
              <div className="space-y-6 text-stone leading-relaxed">
                {(project.concept || '').split('\n\n').filter(Boolean).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-8">
              <div><h4 className="font-mono text-xs tracking-[0.2em] text-stone uppercase mb-2">Location</h4><p className="text-lg text-basalt">{project.location}</p></div>
              <div><h4 className="font-mono text-xs tracking-[0.2em] text-stone uppercase mb-2">Year</h4><p className="text-lg text-basalt">{project.year}</p></div>
              <div><h4 className="font-mono text-xs tracking-[0.2em] text-stone uppercase mb-2">Area</h4><p className="text-lg text-basalt">{project.area}</p></div>
              <div><h4 className="font-mono text-xs tracking-[0.2em] text-stone uppercase mb-2">Type</h4><p className="text-lg text-basalt">{project.typology}</p></div>
              {project.awards && project.awards.length > 0 && (
                <div><h4 className="font-mono text-xs tracking-[0.2em] text-stone uppercase mb-2">Awards</h4><ul className="space-y-1">{project.awards.map((award, index) => (<li key={index} className="text-lg text-basalt">{award}</li>))}</ul></div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {project.gallery && project.gallery.length > 0 && (
        <section className="px-6 lg:px-12 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {project.gallery.map((image, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className={`${index === 0 ? 'md:col-span-2' : ''} bg-basalt/5 overflow-hidden`}>
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.onerror = null
                      e.currentTarget.src = '/placeholder.jpg'
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedProjects && relatedProjects.length > 0 && (
        <section className="px-6 lg:px-12 py-24 bg-basalt/5">
          <div className="max-w-7xl mx-auto">
            <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-mono text-xs tracking-[0.3em] text-stone uppercase mb-12">Related Projects</motion.h3>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedProjects.slice(0, 2).map((related, index) => (
                <motion.div key={related.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <Link to={`/projects/${related.slug}`} className="group block">
                    <div className="aspect-[16/10] bg-basalt/10 overflow-hidden mb-6">
                      <img
                        src={related.heroImage}
                        alt={related.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.onerror = null
                          e.currentTarget.src = '/placeholder.jpg'
                        }}
                      />
                    </div>
                    <h4 className="font-display text-2xl font-light mb-2 text-basalt group-hover:text-basalt/70 transition-colors">{related.title}</h4>
                    <p className="text-sm text-stone">{related.location}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-6 lg:px-12 py-16 border-t border-stone/15">
        <div className="max-w-7xl mx-auto flex justify-between">
          <Link to="/projects" className="font-mono text-xs tracking-[0.2em] uppercase text-stone hover:text-basalt transition-colors">All Projects</Link>
          <Link to="/contact" className="font-mono text-xs tracking-[0.2em] uppercase text-stone hover:text-basalt transition-colors">Start a Project</Link>
        </div>
      </section>
    </motion.div>
  )
}
