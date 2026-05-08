import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { services } from '../../data/services'

export default function ServicesGrid() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="bg-ghost py-24 lg:py-32">
      {/* Section Number */}
      <div className="absolute right-8 font-mono text-xs text-stone/30 tracking-[0.08em]">
        05
      </div>

      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="font-display text-[clamp(48px,6vw,72px)] font-light text-basalt leading-[1.0] tracking-[-0.02em] mb-4">
            What We Do
          </h2>
          <p className="font-sans text-lg text-stone">
            Architecture, Interior, Planning & Heritage
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        to={`/services#${service.slug}`}
        className="group block h-full bg-parchment border border-stone/10 p-8 hover:border-l-ochre hover:border-l-2 transition-all duration-300 hover:-translate-y-1"
      >
        {/* Icon & Number */}
        <div className="flex items-start justify-between mb-6">
          <span className="text-3xl text-stone/40">{service.icon}</span>
          <span className="font-mono text-xs text-ochre tracking-[0.08em]">
            {service.id.replace('s', '')}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-2xl font-light text-basalt leading-tight mb-2 group-hover:text-ochre transition-colors">
          {service.title}
        </h3>

        {/* Tagline */}
        <p className="font-display text-sm italic text-stone mb-4">
          {service.tagline}
        </p>

        {/* Description */}
        <p className="font-sans text-sm text-stone/80 leading-relaxed mb-6">
          {service.description.substring(0, 150)}...
        </p>

        {/* Capabilities */}
        <div className="mb-6">
          <ul className="space-y-1">
            {service.capabilities.slice(0, 3).map((cap) => (
              <li key={cap} className="font-mono text-xs text-stone/60 tracking-[0.02em]">
                {cap}
              </li>
            ))}
          </ul>
        </div>

        {/* Link */}
        <span className="inline-flex items-center gap-2 font-mono text-xs text-ochre tracking-[0.08em] uppercase group-hover:gap-3 transition-all">
          Learn More
          <ArrowRight className="w-3 h-3" />
        </span>
      </Link>
    </motion.div>
  )
}
