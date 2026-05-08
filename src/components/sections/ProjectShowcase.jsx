import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import { useFeaturedProjects } from '../../api/useProjects'
import { getTypologyColor } from '../../utils/helpers'

gsap.registerPlugin(ScrollTrigger)

export default function ProjectShowcase() {
  const { data: projects, loading } = useFeaturedProjects()
  const sectionRef = useRef(null)
  const containerRef = useRef(null)
  const stripRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!projects || loading) return

    const ctx = gsap.context(() => {
      const strip = stripRef.current
      const totalWidth = strip.scrollWidth - window.innerWidth + 100

      gsap.to(strip, {
        x: -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${totalWidth}`,
          invalidateOnRefresh: true
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [projects, loading])

  if (loading) {
    return (
      <section className="bg-basalt py-24">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
          <div className="animate-pulse">
            <div className="h-8 w-48 bg-ivory/10 mb-8" />
            <div className="h-[60vh] bg-ivory/5" />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} className="relative bg-basalt overflow-hidden">
      {/* Section Number */}
      <div className="absolute top-8 right-8 font-mono text-xs text-ivory/30 tracking-[0.08em] z-10">
        02
      </div>

      {/* Header */}
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <h2 className="font-display text-[clamp(48px,6vw,72px)] font-light text-ivory leading-[1.0] tracking-[-0.02em]">
              Selected Works
            </h2>
          </div>
          <div className="flex items-center gap-8">
            <span className="font-mono text-sm text-stone tracking-[0.08em]">
              2012 — 2024
            </span>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 font-sans text-sm text-ochre hover:text-gold transition-colors"
            >
              View All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div ref={containerRef} className="relative h-screen">
        <div 
          ref={stripRef} 
          className="absolute top-1/2 -translate-y-1/2 left-0 flex gap-8 pl-6 md:pl-12 lg:pl-16"
        >
          {projects?.slice(0, 5).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group relative flex-shrink-0 w-[500px] lg:w-[600px] h-[65vh] overflow-hidden"
    >
      {/* Image */}
      <div className="absolute inset-0">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-basalt/90 via-basalt/20 to-transparent" />
      </div>

      {/* Project Number */}
      <div className="absolute top-6 right-6 font-mono text-xs text-ivory/60 tracking-[0.08em]">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
        {/* Typology Tag */}
        <span className={`inline-block px-3 py-1 font-mono text-xs tracking-[0.08em] uppercase mb-4 ${getTypologyColor(project.typology)}`}>
          {project.typology}
        </span>

        {/* Title */}
        <h3 className="font-display text-2xl lg:text-3xl font-light text-ivory leading-tight mb-2">
          {project.title}
        </h3>

        {/* Location & Year */}
        <div className="flex items-center gap-4">
          <span className="font-sans text-sm text-ivory/70">{project.city}</span>
          <span className="w-1 h-1 rounded-full bg-ivory/40" />
          <span className="font-mono text-sm text-ivory/70">{project.year}</span>
        </div>

        {/* Hover Reveal - Area */}
        <div className="mt-4 overflow-hidden">
          <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <span className="font-mono text-xs text-ochre tracking-[0.08em] uppercase">
              {project.area}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
